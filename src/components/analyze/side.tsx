import { useMemo, useState } from 'react';
import styled from 'styled-components';

import logo from '@/assets/B_Logo.svg';
import CategoryGrid, { type Category } from '@/components/analyze/CategoryGrid';
import Tabs, { type TabKey } from '@/components/analyze/Tabs';


type Props = {
  myLocation?: string;
  addressLabel: string;
  onSearch: (q: string) => void;
  tab: TabKey;
  onTabChange: (t: Exclude<TabKey, 'none'>) => void;
  categories: Category[];
  selectedMain: string[];
  onSelectMain: (k: string) => void;
  selectedSub: string[]; // 단일 선택
  onSelectSub: (k: string) => void;
  onAnalyze: () => void;
};

const SUB: Record<string, string[]> = {
  cafe: ['카페', '디저트', '테이크아웃', '브런치', '스페셜티'],
  restaurant: ['한식', '중식', '일식', '양식', '분식', '국밥', '구이', '족발·보쌈'],
  beauty: ['헤어', '네일', '피부', '왁싱', '속눈썹'],
  mart: ['슈퍼', '편의점', '정육', '청과', '수산'],
  hospital: ['내과', '치과', '소아과', '피부과', '한의원'],
  academy: ['보습', '어학', '음악', '미술', '코딩'],
};

export default function Side({
  myLocation,
  addressLabel,
  onSearch,
  tab,
  onTabChange,
  categories,
  selectedMain,
  onSelectMain,
  selectedSub,
  onSelectSub,
  onAnalyze,
}: Props) {
  const [q, setQ] = useState('');
  const activeMain = selectedMain[0] || '';
  const subList = useMemo(() => (activeMain ? SUB[activeMain] || [] : []), [activeMain]);
  const selectedMainLabel = categories.find((c) => c.key === activeMain)?.label || '';
  const selectedSubLabel = selectedSub[0] || '';

  const path = [selectedMainLabel, selectedSubLabel].filter(Boolean).join(' > ') || '업종';

  return (
    <Wrap>
      <Brand>
        <img src={logo} alt="logo" width={32} />
        <Title>분석</Title>
      </Brand>

      <Search
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(q);
        }}
      >
        <input placeholder="장소 검색" value={q} onChange={(e) => setQ(e.target.value)} />
      </Search>
      <SubMeta>현재 내 위치 : {myLocation || '-'}</SubMeta>
      <Meta>분석 위치 : {addressLabel || '-'}</Meta>

      <Tabs
        value={tab}
        onChange={onTabChange}
        renderPanel={() => (
          <PanelBody>
            <SectionTitle>업종 선택</SectionTitle>
            <CategoryGrid
              items={categories}
              selected={selectedMain}
              onToggle={(k) => {
                onSelectMain(k); // 단일 선택
                if (selectedSub.length) onSelectSub(''); // 메인 바꾸면 중분류 초기화
              }}
            />

            <CrumbBar>
              <span className="text" title={path}>
                {path}
              </span>
              <span className="icon">🔎</span>
            </CrumbBar>

            <SectionTitle>중분류</SectionTitle>
            <SubList>
              {subList.map((s) => {
                const on = selectedSub[0] === s;
                return (
                  <SubItem key={s} $on={on} onClick={() => onSelectSub(on ? '' : s)}>
                    {s}
                  </SubItem>
                );
              })}
            </SubList>

            <AnalyzeBtn onClick={onAnalyze} disabled={!activeMain || !selectedSub[0]}>
              분석하기
            </AnalyzeBtn>
          </PanelBody>
        )}
      />
    </Wrap>
  );
}

const Wrap = styled.aside`
  width: 320px;
  height: 100%;
  background: #fff;
  border-right: 1px solid #d1d5db;
  padding: 12px 10px;
  z-index: 2;
  overflow: auto;
`;
const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;
const Title = styled.h1`
  font-size: 16px;
  color: #111827;
  font-weight: 900;
`;
const Search = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 6px;
  input {
    flex: 1;
    height: 38px;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    padding: 0 14px;
    background: #f9fafb;
  }
`;
const SubMeta = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin: 4px 6px;
`;
const Meta = styled.div`
  font-size: 12px;
  color: #374151;
  margin: 0 6px 10px;
`;

const PanelBody = styled.div`
  padding: 12px;
`;
const SectionTitle = styled.h4`
  font-size: 13px;
  font-weight: 800;
  color: #111827;
  margin: 0 0 8px;
`;
const SubList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  max-height: 180px;
  overflow: auto;
  margin-top: 6px;
`;
const SubItem = styled.button<{ $on?: boolean }>`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${(p) => (p.$on ? '#2563EB' : '#e5e7eb')};
  background: ${(p) => (p.$on ? '#EFF6FF' : '#fff')};
  color: ${(p) => (p.$on ? '#1D4ED8' : '#374151')};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: #f3f4f6;
  }
`;
const AnalyzeBtn = styled.button`
  margin-top: 12px;
  width: 100%;
  height: 42px;
  border-radius: 10px;
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  &:disabled {
    background: #93c5fd;
    border-color: #93c5fd;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: #1d4ed8;
    border-color: #1d4ed8;
  }
`;
const CrumbBar = styled.div`
  margin: 10px 0 6px;
  height: 38px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0 10px 0 12px;
  display: flex;
  align-items: center;
  background: #fff;
  .text {
    flex: 1;
    color: #6b7280;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    width: 22px;
    text-align: right;
    font-size: 14px;
    color: #2563eb;
  }
`;
