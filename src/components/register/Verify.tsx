import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Input, Primary } from '@/components/register/Email';

export default function Verify({
  email,
  code,
  onChangeCode,
  onResend,
  onSubmit,
}: {
  email: string;
  code: string;
  onChangeCode: (v: string) => void;
  onResend: () => void;
  onSubmit: () => void;
}) {
  const [remain, setRemain] = useState(5 * 60);
  const [expired, setExpired] = useState(false);
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    if (expired) return;
    const t = setInterval(() => setRemain((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [expired]);

  useEffect(() => {
    if (remain === 0 && !expired) setExpired(true);
  }, [remain, expired]);

  useEffect(() => {
    if (expired && !notified) {
      setNotified(true);
      alert('인증 시간이 만료되었습니다. 코드를 재전송해주세요.');
    }
  }, [expired, notified]);

  const mm = String(Math.floor(remain / 60)).padStart(1, '0');
  const ss = String(remain % 60).padStart(2, '0');

  const handleResend = () => {
    onResend();
    setRemain(5 * 60);
    setExpired(false);
    setNotified(false);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (expired) return;
        if (code === '123456') onSubmit();
        else alert('인증번호가 올바르지 않습니다.');
      }}
    >
      <Muted title={email}>{email || '이메일 주소'}</Muted>

      <InputWrap>
        <Input
          inputMode="numeric"
          maxLength={6}
          placeholder="인증번호"
          value={code}
          onChange={(e) => onChangeCode(e.target.value.replace(/\D/g, ''))}
          required
          disabled={expired}
        />

        <Timer $expired={expired}>{expired ? '만료' : `${mm}:${ss}`}</Timer>

        <ResendBtn type="button" onClick={handleResend}>
          코드 재전송
        </ResendBtn>
      </InputWrap>

      <Primary type="submit" disabled={expired || code.length === 0}>
        인증하기
      </Primary>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 360px;
  margin: 0 auto 8px;
`;

const Muted = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #f9fafb;
  color: #6b7280;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const InputWrap = styled.div`
  position: relative;
`;

const Timer = styled.span<{ $expired: boolean }>`
  position: absolute;
  right: 104px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: ${(p) => (p.$expired ? '#EF4444' : '#6B7280')};
`;

const ResendBtn = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  height: 30px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  font-size: 12px;
  color: #374151;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #eff6ff;
    border-color: #60a5fa;
  }
  &:active {
    transform: translateY(-50%) scale(0.99);
  }
`;
