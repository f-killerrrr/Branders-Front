import styled from 'styled-components';

export default function Email({
  email,
  onChangeEmail,
  onSubmit,
}: {
  email: string;
  onChangeEmail: (v: string) => void;
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
        type="email"
        placeholder="이메일 주소"
        value={email}
        onChange={(e) => onChangeEmail(e.target.value)}
        required
      />
      <Primary type="submit">인증하기</Primary>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 360px;
  margin: 0 auto 8px;
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0 14px;
  font-size: 14px;
  outline: none;
  &::placeholder {
    color: #9ca3af;
  }
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;
export const Primary = styled.button`
  height: 44px;
  border-radius: 10px;
  border: 0;
  background: #3b82f6;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #2563eb;
  }
  &:active {
    background: #1d4ed8;
  }
  &:disabled {
    background: #93c5fd;
    cursor: not-allowed;
  }
`;
