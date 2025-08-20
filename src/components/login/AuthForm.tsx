import { useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: #111827;
  margin-bottom: 4px;
`;

const Sub = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 18px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

const Input = styled.input`
  height: 42px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  margin-bottom: 10px;

  &::placeholder {
    color: #9ca3af;
  }
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

const PrimaryButton = styled.button`
  height: 42px;
  border: none;
  border-radius: 8px;
  background: #3b82f6;
  color: #fff;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
  &:active {
    background: #1d4ed8;
  }
  &:disabled {
    background: #93c5fd;
  }
`;

const HelperRow = styled.div`
  margin: 10px 0 14px;
  font-size: 12px;
  color: #6b7280;
`;

const HelperLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #374151;
  }
`;

const DividerDot = styled.span`
  margin: 0 8px;
`;

const Kakao = styled.img`
  width: 320px;
`;

type Props = {
  onSubmit?: (id: string, pw: string) => void;
  className?: string;
};

export default function AuthForm({ onSubmit, className }: Props) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(id, pw);
  };

  return (
    <Wrap className={className}>
      <Heading>환영합니다.</Heading>
      <Sub>로그인으로 서비스를 시작해보세요!</Sub>

      <Form onSubmit={handleSubmit}>
        <Input placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        <Input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <PrimaryButton type="submit">로그인</PrimaryButton>
      </Form>

      <HelperRow>
        <HelperLink href="#">비밀번호 찾기</HelperLink>
        <DividerDot>｜</DividerDot>
        <HelperLink href="/register">회원가입</HelperLink>
      </HelperRow>

      <a href="#">
        <Kakao src="/src/assets/kakao_login_medium_wide.png" alt="카카오로 로그인" />
      </a>
    </Wrap>
  );
}
