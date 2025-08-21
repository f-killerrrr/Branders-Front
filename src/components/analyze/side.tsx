import styled from 'styled-components';
import { useState } from 'react';
import Tabs, { type TabKey } from './Tabs';

type Props = {
  addressLabel: string;
  onSearch: (q: string) => void;
  tab: TabKey;
  onTabChange: (t: TabKey) => void;
};

export default function Side({ addressLabel, onSearch, tab, onTabChange }: Props) {
  const [q, setQ] = useState('');

  return (
    <Wrap>
      <Brand>
        <img src="/src/assets/B_Logo.svg" alt="logo" width={32} />
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

      <Meta>분석 위치 : {addressLabel || '-'}</Meta>

      <Tabs value={tab} onChange={onTabChange} />

      <Nav>
        <Small>※ 탭에 맞춰 오른쪽 리포트가 바뀝니다.</Small>
      </Nav>
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
  margin-bottom: 8px;
  input {
    flex: 1;
    height: 38px;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    padding: 0 14px;
    background: #f9fafb;
  }
`;
const Meta = styled.div`
  font-size: 12px;
  color: #374151;
  margin: 6px 6px 10px;
`;
const Nav = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
`;
const Small = styled.div`
  font-size: 11px;
  color: #6b7280;
`;
