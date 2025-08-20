import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import LogoHeader from '../components/register/LogoHeader';
import TitleBlock from '../components/register/TitleBlock';
import Email from '../components/register/Email';
import Verify from '../components/register/Verify';
import Account from '../components/register/Account';
import Startup from '../components/register/Startup';
import Nickname from '../components/register/Nickname';

export type StepKey = 'email' | 'verify' | 'account' | 'startup' | 'nickname';

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
  const [position, setPosition] = useState('');
  const [nickname, setNickname] = useState('');

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
    verify: '반가워요!',
    account: '만나서 반가워요!',
    startup: '저희 더 알아볼까요?',
    nickname: '거의 다 됐어요!',
  };

  const descMap: Record<StepKey, string> = {
    email: '이메일을 입력해주세요.<br/>이메일은 로그인과 비밀번호 찾을 때 사용될 예정입니다.',
    verify: '이메일로 인증번호를 보냈어요.<br/>인증번호를 입력해주세요.',
    account: '아이디와 비밀번호를 입력해주세요.',
    startup: '창업 유형을 선택해주세요.',
    nickname: '닉네임을 입력해주세요.',
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
                // TODO: 이메일 중복 확인 & 인증코드 요청
                goNext('verify');
              }}
            />
          )}

          {step === 'verify' && (
            <Verify
              email={email}
              code={authCode}
              onChangeCode={setAuthCode}
              onResend={() => {
                // TODO: 인증코드 재전송
              }}
              onSubmit={() => {
                if (authCode.length < 6) return;
                // TODO: 코드 검증
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
              position={position}
              onChangeAge={setAge}
              onChangeSelected={setSelected}
              onChangePosition={setPosition}
              onSubmit={() => {
                if (!age) return;
                goNext('nickname');
              }}
            />
          )}

          {step === 'nickname' && (
            <Nickname
              nickname={nickname}
              onChangeNickname={setNickname}
              onSubmit={() => {
                if (!nickname.trim()) return;
                // TODO: 최종 가입 API
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
