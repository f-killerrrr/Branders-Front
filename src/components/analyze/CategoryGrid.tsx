import styled from 'styled-components';

export type Category = { key: string; label: string; icon: string };

export default function CategoryGrid({
  items,
  selected,
  onToggle,
}: {
  items: Category[];
  selected: string[];
  onToggle: (k: string) => void;
}) {
  return (
    <Wrap>
      {items.map((c) => {
        const on = selected.includes(c.key);
        return (
          <Item key={c.key} $on={on} onClick={() => onToggle(c.key)} title={c.label}>
            <span className="icon">{c.icon}</span>
            <span className="label">{c.label}</span>
          </Item>
        );
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 4px 0;
`;
const Item = styled.button<{ $on?: boolean }>`
  height: 60px;
  border-radius: 12px;
  border: 1px solid ${(p) => (p.$on ? '#2563EB' : '#e5e7eb')};
  background: ${(p) => (p.$on ? '#EFF6FF' : '#fff')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  .icon {
    font-size: 18px;
  }
  .label {
    font-size: 12px;
    color: ${(p) => (p.$on ? '#1D4ED8' : '#374151')};
    font-weight: 700;
  }
  &:hover {
    border-color: #93c5fd;
    background: #f3f4f6;
  }
`;
