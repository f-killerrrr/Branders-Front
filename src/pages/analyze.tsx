import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { type Category } from '@/components/analyze/CategoryGrid';
import AnalyzeMap from '@/components/analyze/map';
import ReportPanel from '@/components/analyze/ReportPanel';
import Side from '@/components/analyze/side';
import type { TabKey } from '@/components/analyze/Tabs';

declare global {
  interface Window {
    kakao: any;
  }
}

const CATEGORY_ITEMS: Category[] = [
  { key: 'cafe', label: '카페', icon: '☕' },
  { key: 'restaurant', label: '식당', icon: '🍴' },
  { key: 'beauty', label: '미용', icon: '💇' },
  { key: 'mart', label: '마트', icon: '🛒' },
  { key: 'hospital', label: '병원', icon: '🏥' },
  { key: 'academy', label: '학원', icon: '📚' },
];

export default function AnalyzePage() {
  const [center, setCenter] = useState({ lat: 37.56779, lng: 126.98004 });
  const [myLocation, setMyLocation] = useState('');
  const [address, setAddress] = useState('');
  const [tab, setTab] = useState<TabKey>('none');
  const [open, setOpen] = useState(true);
  const [selectedMain, setSelectedMain] = useState<string[]>([]);
  const [selectedSub, setSelectedSub] = useState<string[]>([]);

  const handleSelectMain = (key: string) => setSelectedMain(key ? [key] : []);
  const handleSelectSub = (key: string) => setSelectedSub(key ? [key] : []);

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
            if (!address) setAddress(addr);
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
          onTabChange={(t) => setTab(t)}
          categories={CATEGORY_ITEMS}
          selectedMain={selectedMain}
          onSelectMain={handleSelectMain}
          selectedSub={selectedSub}
          onSelectSub={handleSelectSub}
          onAnalyze={() => setOpen(true)}
        />
      </SidePane>

      <MapPane>
        <AnalyzeMap center={center} />
        {tab !== 'none' && (
          <ReportPanel
            open={open}
            onToggle={() => setOpen((o) => !o)}
            tab={tab as Exclude<TabKey, 'none'>}
          />
        )}
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
