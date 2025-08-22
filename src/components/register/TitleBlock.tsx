import styled from 'styled-components';

export default function TitleBlock({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <Title>{title}</Title>
      <Desc dangerouslySetInnerHTML={{ __html: desc }} />
    </>
  );
}

const Title = styled.h1`
  margin: 8px 0 6px;
  font-size: 22px;
  font-weight: 900;
  color: #111827;
`;
const Desc = styled.p`
  display: grid;
  gap: 4px;
  margin: 10px auto 16px;
  text-align: left;
  width: 360px;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.6;
`;
