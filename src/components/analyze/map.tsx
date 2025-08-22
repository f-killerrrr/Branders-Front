import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useKakaoMaps } from '../../hooks/useKakaoMaps';

type Props = { center: { lat: number; lng: number } };

declare global {
  interface Window {
    kakao: any;
  }
}

type GeoJSON = {
  type: 'FeatureCollection';
  features: {
    type: 'Feature';
    geometry: {
      type: 'Polygon' | 'MultiPolygon';
      coordinates: number[][][] | number[][][][];
    };
    properties?: Record<string, any>;
  }[];
};

export default function AnalyzeMap({ center }: Props) {
  const loaded = useKakaoMaps();
  const mapDivRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const circleRef = useRef<any>(null);
  const polysRef = useRef<any[]>([]);
  const [dongCode, setDongCode] = useState<string>('');

  useEffect(() => {
    if (!loaded || !mapDivRef.current || mapRef.current) return;
    const kakao = window.kakao;

    mapRef.current = new kakao.maps.Map(mapDivRef.current, {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level: 4,
      mapTypeId: kakao.maps.MapTypeId.ROADMAP,
    });

    const zoom = new kakao.maps.ZoomControl();
    mapRef.current.addControl(zoom, kakao.maps.ControlPosition.RIGHT);

    markerRef.current = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(center.lat, center.lng),
      map: mapRef.current,
    });
  }, [loaded]);

  useEffect(() => {
    if (!loaded || !mapRef.current) return;
    const kakao = window.kakao;
    const ll = new kakao.maps.LatLng(center.lat, center.lng);
    mapRef.current.setCenter(ll);
    if (markerRef.current) markerRef.current.setPosition(ll);

    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(center.lng, center.lat, (result: any[], status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const h = result.find((r) => r.region_type === 'H');
        if (h?.code) setDongCode(h.code);
      }
    });
  }, [center, loaded]);

  useEffect(() => {
    if (!loaded || !mapRef.current || !dongCode) return;
    let aborted = false;

    const clearOverlays = () => {
      polysRef.current.forEach((p) => p.setMap(null));
      polysRef.current = [];
      if (circleRef.current) {
        circleRef.current.setMap(null);
        circleRef.current = null;
      }
    };

    const drawCircleFallback = () => {
      const kakao = window.kakao;
      clearOverlays();
      circleRef.current = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(center.lat, center.lng),
        radius: 350,
        strokeWeight: 2,
        strokeColor: '#60A5FA',
        strokeOpacity: 0.9,
        strokeStyle: 'solid',
        fillColor: '#93C5FD',
        fillOpacity: 0.35,
      });
      circleRef.current.setMap(mapRef.current);
    };

    const parsePaths = (gj: GeoJSON) => {
      const kakao = window.kakao;
      const paths: any[][] = [];

      gj.features.forEach((f) => {
        if (f.geometry.type === 'Polygon') {
          const rings = f.geometry.coordinates as number[][][];
          rings.forEach((ring) => {
            paths.push(ring.map(([lng, lat]) => new kakao.maps.LatLng(lat, lng)));
          });
        } else if (f.geometry.type === 'MultiPolygon') {
          const polys = f.geometry.coordinates as number[][][][];
          polys.forEach((poly) => {
            poly.forEach((ring) => {
              paths.push(ring.map(([lng, lat]) => new kakao.maps.LatLng(lat, lng)));
            });
          });
        }
      });

      return paths;
    };

    const drawPolygon = (gj: GeoJSON) => {
      const kakao = window.kakao;
      clearOverlays();
      const paths = parsePaths(gj);
      if (!paths.length) {
        drawCircleFallback();
        return;
      }

      paths.forEach((path) => {
        const poly = new kakao.maps.Polygon({
          path,
          strokeWeight: 2,
          strokeColor: '#60A5FA',
          strokeOpacity: 1,
          strokeStyle: 'solid',
          fillColor: '#93C5FD',
          fillOpacity: 0.35,
        });
        poly.setMap(mapRef.current);
        polysRef.current.push(poly);
      });

      const bounds = new kakao.maps.LatLngBounds();
      paths.forEach((ring) => ring.forEach((ll) => bounds.extend(ll)));
      if (!bounds.isEmpty()) mapRef.current.setBounds(bounds);
    };

    (async () => {
      try {
        const url = `/assets/geojson/dong/${dongCode}.geojson`;
        const res = await fetch(url, { cache: 'force-cache' });
        if (!res.ok) throw new Error('no geojson');
        const gj = (await res.json()) as GeoJSON;
        if (!aborted) drawPolygon(gj);
      } catch {
        if (!aborted) drawCircleFallback();
      }
    })();

    return () => {
      aborted = true;
    };
  }, [dongCode, center, loaded]);

  return <MapDiv ref={mapDivRef} />;
}

const MapDiv = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;
