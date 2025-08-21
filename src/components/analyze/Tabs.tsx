import styled from 'styled-components';

export type TabKey = 'simple' | 'deep' | 'flow' | 'popular';

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'simple', label: '간단 분석', icon: '📊' },
  { key: 'deep', label: '심층 분석', icon: '🔍' },
  { key: 'flow', label: '유동 인구', icon: '👥' },
  { key: 'popular', label: '인기 업종', icon: '📈' },
];

export default function Tabs({
  value,
  onChange,
}: {
  value: TabKey;
  onChange: (v: TabKey) => void;
}) {
  return (
    <Wrap>
      {TABS.map((t) => (
        <Btn key={t.key} $active={value === t.key} onClick={() => onChange(t.key)}>
          <i>{t.icon}</i>
          {t.label}
        </Btn>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 6px;
`;
const Btn = styled.button<{ $active?: boolean }>`
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border-radius: 10px;
  border: 0;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(p) => (p.$active ? '#1d4ed8' : '#374151')};
  background: ${(p) => (p.$active ? '#eff6ff' : 'transparent')};
  &:hover {
    background: ${(p) => (p.$active ? '#dbeafe' : '#f3f4f6')};
  }
  i {
    width: 20px;
    text-align: center;
  }
`;
