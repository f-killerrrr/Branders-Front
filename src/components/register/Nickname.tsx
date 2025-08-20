import styled from 'styled-components';
import { Primary } from './Email';

export default function Nickname({
  nickname,
  onChangeNickname,
  onSubmit,
}: {
  nickname: string;
  onChangeNickname: (v: string) => void;
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
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => onChangeNickname(e.target.value)}
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
