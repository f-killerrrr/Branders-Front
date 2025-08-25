import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

import logo from '@/assets/Logo.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const LogoFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 24px;
  width: 360px;
`;

const Logo = styled.img`
  width: 340px;
`;

const Slogan = styled.p`
  margin-top: 2px;
  font-size: 12px;
  color: #6b7280;
`;

type Props = {
  className?: string;
};

export default function LogoBox({ className }: Props) {
  return (
    <Wrap className={className}>
      <LogoFrame>
        <Link to="/">
          <Logo src={logo} alt="" />
        </Link>
      </LogoFrame>
      <Slogan>창업의 시작, 브랜더스와 함께</Slogan>
    </Wrap>
  );
}
