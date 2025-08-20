import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Primary } from './Email';

declare global {
  interface Window {
    daum?: any;
  }
}

export default function Startup({
  age,
  selected,
  type,
  position,
  onChangeAge,
  onChangeSelected,
  onChangeType,
  onChangePosition,
  onSubmit,
}: {
  age: string;
  selected: string;
  type: string;
  position: string;
  onChangeAge: (v: string) => void;
  onChangeSelected: (v: string) => void;
  onChangeType: (v: string) => void;
  onChangePosition: (v: string) => void;
  onSubmit: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [postcodeReady, setPostcodeReady] = useState(false);

  useEffect(() => {
    if (window.daum?.Postcode) {
      setPostcodeReady(true);
      return;
    }
    const id = 'daum-postcode-script';
    if (document.getElementById(id)) return;

    const s = document.createElement('script');
    s.id = id;
    s.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    s.async = true;
    s.onload = () => setPostcodeReady(true);
    document.body.appendChild(s);
  }, []);

  const ageError = (!age || +age < 1) && submitted;
  const selectedError = selected === 'startup' && submitted;

  const openPostcode = () => {
    if (!postcodeReady || !window.daum?.Postcode) {
      alert('주소 검색 스크립트를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 1.5;
    const top = window.screenY + (window.outerHeight - height) / 1.5;

    new window.daum.Postcode({
      oncomplete: (data: any) => {
        // 도로명 우선, 없으면 지번
        const addr = data.roadAddress || data.jibunAddress || '';
        // 참고항목 있으면 붙이기 (선택)
        const extra = data.buildingName ? ` ${data.buildingName}` : '';
        onChangePosition((addr + extra).trim());
      },
      width,
      height,
    }).open({
      left,
      top,
    });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        if (ageError || selectedError) return;
        onSubmit();
      }}
    >
      <Input
        type="number"
        placeholder="나이"
        value={age}
        min={1}
        max={100}
        onChange={(e) => {
          const value = e.target.value;
          if (+value > 100) return;
          onChangeAge(value);
        }}
        $error={ageError}
      />
      {ageError && <ErrorMsg>나이를 입력해주세요.</ErrorMsg>}

      <Select
        value={selected}
        onChange={(e) => onChangeSelected(e.target.value)}
        $error={selectedError}
      >
        <option value="startup" disabled>
          창업 여부
        </option>
        <option value="Startup">창업자</option>
        <option value="Pre_startup">예비 창업자</option>
      </Select>
      {selectedError && <ErrorMsg>창업 여부를 선택해주세요.</ErrorMsg>}

      <Input
        placeholder="창업 아이템"
        value={type}
        onChange={(e) => onChangeType(e.target.value)}
      />

      <AddressWrap>
        <Input
          placeholder="창업 예상 위치 (클릭하여 주소 검색)"
          value={position}
          readOnly
          onClick={openPostcode}
          title="클릭하여 주소 검색"
        />
        <FindBtn type="button" onClick={openPostcode}>
          주소 검색
        </FindBtn>
      </AddressWrap>

      <Primary type="submit">완료하기</Primary>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 360px;
  margin: 0 auto 8px;
`;

const AddressWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
`;

const FindBtn = styled.button`
  height: 44px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: #1d4ed8;
    border-color: #1d4ed8;
  }
`;

const Select = styled.select<{ $error?: boolean }>`
  height: 44px;
  border: 1px solid ${(p) => (p.$error ? '#ef4444' : '#d1d5db')};
  border-radius: 10px;
  padding: 0 12px;
  outline: none;
  &:focus {
    border-color: ${(p) => (p.$error ? '#ef4444' : '#2563eb')};
    box-shadow: 0 0 0 3px ${(p) => (p.$error ? 'rgba(239,68,68,0.2)' : 'rgba(37,99,235,0.15)')};
  }
`;

const Input = styled.input<{ $error?: boolean }>`
  height: 44px;
  border: 1px solid ${(p) => (p.$error ? '#ef4444' : '#d1d5db')};
  border-radius: 10px;
  padding: 0 14px;
  &:focus {
    border-color: ${(p) => (p.$error ? '#ef4444' : '#2563eb')};
    box-shadow: 0 0 0 3px ${(p) => (p.$error ? 'rgba(239,68,68,0.2)' : 'rgba(37,99,235,0.15)')};
  }
`;

const ErrorMsg = styled.div`
  font-size: 11px;
  color: #ef4444;
  text-align: left;
  margin-top: -6px;
  margin-bottom: 4px;
`;
