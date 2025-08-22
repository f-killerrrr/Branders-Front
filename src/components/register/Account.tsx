import { useState } from 'react';
import styled from 'styled-components';

import { Primary } from '@/components/register/Email';

export default function Account({
  userid,
  password,
  confirmPassword,
  onChangeId,
  onChangePw,
  onChangeConfirm,
  onSubmit,
}: {
  userid: string;
  password: string;
  confirmPassword: string;
  onChangeId: (v: string) => void;
  onChangePw: (v: string) => void;
  onChangeConfirm: (v: string) => void;
  onSubmit: () => void;
}) {
  const [touched, setTouched] = useState({
    id: false,
    pw: false,
    confirm: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const idError = !userid.trim() && (touched.id || submitted);
  const pwError = (password.length > 0 && password.length < 8) || (!password && submitted);
  const confirmError =
    (confirmPassword.length > 0 && password !== confirmPassword) || (!confirmPassword && submitted);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        if (idError || pwError || confirmError) return;
        onSubmit();
      }}
    >
      <Input
        placeholder="아이디"
        value={userid}
        onChange={(e) => onChangeId(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, id: true }))}
        $error={idError}
      />
      {idError && <ErrorMsg>아이디를 입력해주세요.</ErrorMsg>}

      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => onChangePw(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, pw: true }))}
        $error={pwError}
      />
      {pwError && (
        <ErrorMsg>
          {password.length === 0
            ? '비밀번호를 입력해주세요.'
            : '비밀번호는 8자리 이상 입력해야 합니다.'}
        </ErrorMsg>
      )}

      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => onChangeConfirm(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, confirm: true }))}
        $error={confirmError}
      />
      {confirmError && (
        <ErrorMsg>
          {confirmPassword.length === 0
            ? '비밀번호 확인을 입력해주세요.'
            : '비밀번호가 일치하지 않습니다.'}
        </ErrorMsg>
      )}

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

const Input = styled.input<{ $error?: boolean }>`
  height: 44px;
  border: 1px solid ${(p) => (p.$error ? '#ef4444' : '#d1d5db')};
  border-radius: 10px;
  padding: 0 14px;
  font-size: 14px;
  outline: none;
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
