import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useKakaoMaps } from '../../hooks/useKakaoMaps';

type Props = { center: { lat: number; lng: number } };

declare global {
  interface Window {
    kakao: any;
  }
}

export default function AnalyzeMap({ center }: Props) {
  const loaded = useKakaoMaps();
  const mapDivRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

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
  }, [center, loaded]);

  return <MapDiv ref={mapDivRef} />;
}

const MapDiv = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;
