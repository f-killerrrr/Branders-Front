import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Side from '../components/analyze/side';
import AnalyzeMap from '../components/analyze/map';
import ReportPanel from '../components/analyze/ReportPanel';
import type { TabKey } from '../components/analyze/Tabs';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function AnalyzePage() {
  const [center, setCenter] = useState({ lat: 37.56779, lng: 126.98004 });
  const [myLocation, setMyLocation] = useState('');
  const [address, setAddress] = useState('');
  const [tab, setTab] = useState<TabKey>('simple');
  const [open, setOpen] = useState(true);

  const handleSearch = (q: string) => {
    if (!window.kakao?.maps?.services || !q.trim()) return;
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(q, (data: any, status: any) => {
      if (status !== window.kakao.maps.services.Status.OK || !data?.length) return;
      const first = data[0];
      setCenter({ lat: Number(first.y), lng: Number(first.x) });
      setAddress(first.place_name || q);
      setOpen(true);
    });
  };

  useEffect(() => {
    if (!navigator.geolocation || !window.kakao?.maps?.services) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setCenter({ lat, lng });

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.coord2Address(lng, lat, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK && result?.[0]) {
            const addr = result[0].address?.address_name || '';
            setMyLocation(addr);
          }
        });
      },
      () => {},
    );
  }, []);

  return (
    <Wrap>
      <SidePane>
        <Side
          myLocation={myLocation}
          addressLabel={address}
          onSearch={handleSearch}
          tab={tab}
          onTabChange={(t) => {
            setTab(t);
            setOpen(true);
          }}
        />
      </SidePane>

      <MapPane>
        <AnalyzeMap center={center} />
        <ReportPanel open={open} onToggle={() => setOpen((o) => !o)} tab={tab} />
      </MapPane>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  height: 100vh;
  background: #f9fafb;
`;
const SidePane = styled.div`
  position: relative;
`;
const MapPane = styled.div`
  position: relative;
  overflow: hidden;
`;
