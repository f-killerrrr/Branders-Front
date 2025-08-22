import styled from 'styled-components';

export default function LogoHeader({ src }: { src: string }) {
  src = '/src/assets/B_Logo.svg';

  return (
    <Wrap>
      <img src={src} alt="logo" />
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
