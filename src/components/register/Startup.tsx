import styled from 'styled-components';
import { Primary } from './Email';

export default function Startup({
  age,
  selected,
  position,
  onChangeAge,
  onChangeSelected,
  onChangePosition,
  onSubmit,
}: {
  age: string;
  selected: string;
  position: string;
  onChangeAge: (v: string) => void;
  onChangeSelected: (v: string) => void;
  onChangePosition: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
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
      />

      <Select value={selected} onChange={(e) => onChangeSelected(e.target.value)}>
        <option value="startup">창업 유형</option>
        <option value="food">음식점</option>
        <option value="coffee">카페</option>
      </Select>

      <Input
        placeholder="창업 예상 위치"
        value={position}
        onChange={(e) => onChangePosition(e.target.value)}
      />

      <Primary type="submit">계속하기</Primary>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 360px;
  margin: 0 auto 8px;
`;
const Select = styled.select`
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0 12px;
  outline: none;
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;
const Input = styled.input`
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0 14px;
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;
