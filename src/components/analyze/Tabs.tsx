import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export type TabKey = 'none' | 'simple' | 'deep' | 'flow' | 'popular';

export const TABS: { key: Exclude<TabKey, 'none'>; label: string; icon: string }[] = [
  { key: 'simple', label: '간단 분석', icon: '📊' },
  { key: 'deep', label: '심층 분석', icon: '🔍' },
  { key: 'flow', label: '유동 인구', icon: '👥' },
  { key: 'popular', label: '인기 업종', icon: '📈' },
];

function Collapsible({ open, children }: { open: boolean; children: ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  const measure = () => {
    const el = innerRef.current;
    if (!el) return;
    setH(open ? el.scrollHeight : 0);
  };

  useLayoutEffect(measure, [open]);
  useEffect(() => {
    if (!open) return;
    const ro = new ResizeObserver(measure);
    if (innerRef.current) ro.observe(innerRef.current);
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <CollapseOuter style={{ height: h }}>
      <div ref={innerRef}>{children}</div>
    </CollapseOuter>
  );
}

export default function Tabs({
  value,
  onChange,
  renderPanel,
}: {
  value: TabKey;
  onChange: (v: Exclude<TabKey, 'none'>) => void;
  renderPanel?: (active: Exclude<TabKey, 'none'>) => ReactNode;
}) {
  return (
    <Wrap>
      {TABS.map((t) => (
        <div key={t.key}>
          <Btn $active={value === t.key} onClick={() => onChange(t.key)}>
            <i>{t.icon}</i>
            {t.label}
          </Btn>
          <Collapsible open={value === t.key}>
            {value === t.key && renderPanel ? <PanelSlot>{renderPanel(t.key)}</PanelSlot> : null}
          </Collapsible>
        </div>
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
const CollapseOuter = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.28s ease;
`;
const PanelSlot = styled.div`
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #fff;
  margin-top: 8px;
  padding: 12px;
`;
