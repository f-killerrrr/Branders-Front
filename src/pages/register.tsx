import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import LogoHeader from '../components/register/LogoHeader';
import TitleBlock from '../components/register/TitleBlock';
import Email from '../components/register/Email';
import Verify from '../components/register/Verify';
import Account from '../components/register/Account';
import Startup from '../components/register/Startup';

export type StepKey = 'email' | 'verify' | 'account' | 'startup';

const Page = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const Center = styled.main`
  width: 560px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 0 32px;
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-6px); }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Stage = styled.div<{ $leaving: boolean }>`
  animation: ${(p) => (p.$leaving ? fadeOut : fadeIn)} 0.4s ease both;
`;

const Bottom = styled.div`
  margin-top: auto;
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 100px;
  a {
    margin-left: 6px;
    color: #2563eb;
    font-weight: 700;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default function RegisterPage() {
  const [step, setStep] = useState<StepKey>('email');

  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [userid, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [age, setAge] = useState('');
  const [selected, setSelected] = useState('startup');
  const [type, setType] = useState(''); // 개인/기업 선택
  const [position, setPosition] = useState('');

  const [leaving, setLeaving] = useState(false);
  const goNext = (next: StepKey) => {
    setLeaving(true);
    setTimeout(() => {
      setStep(next);
      setLeaving(false);
    }, 400);
  };

  const titleMap: Record<StepKey, string> = {
    email: '반가워요!',
    verify: '만나서 반가워요!',
    account: '저희 더 알아볼까요?',
    startup: '거의 다 했어요!',
  };

  const descMap: Record<StepKey, string> = {
    email: '이메일을 입력해주세요.<br/>이메일은 로그인과 비밀번호 찾을 때 사용될 예정입니다.',
    verify: '이메일로 인증번호를 보냈어요.<br/>인증번호를 입력해주세요.',
    account: '아이디와 비밀번호를 입력해주세요.',
    startup: '창업 여부를 선택해주세요.',
  };

  return (
    <Page>
      <Center>
        <LogoHeader />
        <TitleBlock title={titleMap[step]} desc={descMap[step]} />

        <Stage $leaving={leaving}>
          {step === 'email' && (
            <Email
              email={email}
              onChangeEmail={setEmail}
              onSubmit={() => {
                if (!email.trim()) return;
                goNext('verify');
              }}
            />
          )}

          {step === 'verify' && (
            <Verify
              email={email}
              code={authCode}
              onChangeCode={setAuthCode}
              onResend={() => {}}
              onSubmit={() => {
                if (authCode.length < 6) return;
                goNext('account');
              }}
            />
          )}

          {step === 'account' && (
            <Account
              userid={userid}
              password={password}
              confirmPassword={confirmPassword}
              onChangeId={setId}
              onChangePw={setPassword}
              onChangeConfirm={setConfirm}
              onSubmit={() => {
                if (!userid || password.length < 8 || password !== confirmPassword) return;
                goNext('startup');
              }}
            />
          )}

          {step === 'startup' && (
            <Startup
              age={age}
              selected={selected}
              type={type}
              position={position}
              onChangeAge={setAge}
              onChangeSelected={setSelected}
              onChangeType={setType}
              onChangePosition={setPosition}
              onSubmit={() => {
                if (!age || selected === 'startup') {
                  return;
                }
                alert('회원가입이 완료되었습니다!\n이제 로그인 후 서비스를 이용하실 수 있습니다.');
                window.location.href = '/login';
              }}
            />
          )}
        </Stage>

        <Bottom>
          계정이 있나요? <a href="/login">로그인</a>
        </Bottom>
      </Center>
    </Page>
  );
}
