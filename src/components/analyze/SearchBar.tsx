import styled from 'styled-components';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    daum?: any;
  }
}

type Props = {
  placeholder?: string;
  onSearch: (q: string) => void;
};

export default function SearchBar({ placeholder = '장소 검색', onSearch }: Props) {
  const [q, setQ] = useState('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.daum?.Postcode) {
      setReady(true);
      return;
    }
    const id = 'daum-postcode';
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    s.async = true;
    s.onload = () => setReady(true);
    document.body.appendChild(s);
  }, []);

  const openPostcode = () => {
    if (!ready || !window.daum?.Postcode) return;
    const width = 500,
      height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    new window.daum.Postcode({
      oncomplete: (data: any) => {
        const addr = (data.roadAddress || data.jibunAddress || '').trim();
        if (addr) onSearch(addr);
      },
      width,
      height,
    }).open({ left, top });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(q);
      }}
    >
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} />
      <IconBtn type="button" title="주소 검색" onClick={openPostcode}>
        🔎
      </IconBtn>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  gap: 8px;
  input {
    flex: 1;
    height: 38px;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    padding: 0 14px;
    background: #f9fafb;
  }
`;
const IconBtn = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #f3f4f6;
  }
`;
