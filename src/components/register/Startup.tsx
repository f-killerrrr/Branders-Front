import { useState } from 'react';
import styled from 'styled-components';
import { Primary } from './Email';

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

  // 에러 조건
  const ageError = (!age || +age < 1) && submitted;
  const selectedError = selected === 'startup' && submitted;
  const typeError = type === 'startup' && submitted;

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        if (ageError || selectedError || typeError) return;
        onSubmit();
      }}
    >
      {/* 나이 */}
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

      {/* 창업 여부 */}
      <Select
        value={selected}
        onChange={(e) => onChangeSelected(e.target.value)}
        $error={selectedError}
      >
        <option value="startup">창업 여부</option>
        <option value="Startup">창업자</option>
        <option value="Pre_startup">예비 창업자</option>
      </Select>
      {selectedError && <ErrorMsg>창업 여부를 선택해주세요.</ErrorMsg>}

      {/* 창업 유형 */}
      <Select value={type} onChange={(e) => onChangeType(e.target.value)} $error={typeError}>
        <option value="startup">창업 유형</option>
        <option value="food">음식점</option>
        <option value="coffee">카페</option>
      </Select>
      {typeError && <ErrorMsg>창업 유형을 선택해주세요.</ErrorMsg>}

      {/* 위치 */}
      <Input
        placeholder="창업 예상 위치"
        value={position}
        onChange={(e) => onChangePosition(e.target.value)}
      />

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
