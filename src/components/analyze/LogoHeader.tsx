import styled from 'styled-components';

import logo from '@/assets/B_Logo.svg';

export default function LogoHeader() {
  return (
    <Wrap>
      <img src={logo} alt="logo" />
      <h1>상권 분석</h1>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
  h1 {
    font-size: 16px;
    color: #111827;
    font-weight: 900;
  }
`;
