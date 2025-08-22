import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export default function LogoHeader() {
  return (
    <Wrap>
      <Link to="/">
        <Logo src="/src/assets/Logo.svg" />
      </Link>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 5px;
`;
const Logo = styled.img`
  width: 360px;
  height: 240px;
`;
