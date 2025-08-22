import styled from 'styled-components';

import { type TabKey } from '@/components/analyze/Tabs';

type Props = {
  open: boolean;
  onToggle: () => void;
  tab: Exclude<TabKey, 'none'>;
};

export default function ReportPanel({ open, onToggle, tab }: Props) {
  return (
    <>
      <Panel $open={open}>
        <HeadRow>
          <Header>{labelByTab[tab]}</Header>
          <CloseBtn onClick={onToggle}>{open ? '▶' : '◀'}</CloseBtn>
        </HeadRow>

        {tab === 'simple' && <SimpleBlock />}
        {tab === 'deep' && <DeepBlock />}
        {tab === 'flow' && <FlowBlock />}
        {tab === 'popular' && <PopularBlock />}
      </Panel>

      {!open && (
        <OpenHandle onClick={onToggle} title="열기">
          ◀ 리포트
        </OpenHandle>
      )}
    </>
  );
}

const labelByTab: Record<Exclude<TabKey, 'none'>, string> = {
  simple: '간단분석 리포트',
  deep: '심층분석 리포트',
  flow: '유동인구 리포트',
  popular: '인기 업종 리포트',
};

function SimpleBlock() {
  return (
    <>
      <KPIs>
        <Kpi>
          <strong>542 만원</strong>
          <em>월 평균 매출</em>
        </Kpi>
        <Kpi>
          <strong>14,719명</strong>
          <em>일 평균 유동인구</em>
        </Kpi>
        <Kpi>
          <strong>10개</strong>
          <em>선택업종 점포 수</em>
        </Kpi>
      </KPIs>
      <Note>
        AI 코멘트: 가장 붐비는 시간대는 <b>14~18시</b>입니다.
      </Note>
    </>
  );
}

function DeepBlock() {
  return (
    <>
      <Row>
        <Card>
          <h4>매출 추세</h4>
          <p>최근 12개월 +11.3%</p>
        </Card>
        <Card>
          <h4>경쟁도</h4>
          <p>반경 500m 점포 67개</p>
        </Card>
      </Row>
      <Row>
        <Card>
          <h4>소비력 지수</h4>
          <p>102.4 (도시 평균 100)</p>
        </Card>
        <Card>
          <h4>임대료(추정)</h4>
          <p>평균 1,980천원/평</p>
        </Card>
      </Row>
      <ExportBtn onClick={() => alert('PDF 내보내기 준비중입니다.')}>PDF로 내보내기</ExportBtn>
    </>
  );
}

function FlowBlock() {
  return (
    <>
      <KPIs>
        <Kpi>
          <strong>오전</strong>
          <em>07~11시 23%</em>
        </Kpi>
        <Kpi>
          <strong>오후</strong>
          <em>12~18시 47%</em>
        </Kpi>
        <Kpi>
          <strong>저녁</strong>
          <em>19~22시 30%</em>
        </Kpi>
      </KPIs>
      <Row>
        <Card>
          <h4>요일별 유동</h4>
          <p>금·토 피크</p>
        </Card>
        <Card>
          <h4>체류 시간</h4>
          <p>평균 17분</p>
        </Card>
      </Row>
    </>
  );
}

function PopularBlock() {
  return (
    <>
      <Row>
        <Card>
          <h4>인기 업종 TOP5</h4>
          <p>카페 · 국밥 · 분식 · 미용 · 편의점</p>
        </Card>
      </Row>
      <Row>
        <Card>
          <h4>공실/신규</h4>
          <p>공실률 3.2% · 신규점포 8</p>
        </Card>
      </Row>
    </>
  );
}

const Panel = styled.section<{ $open: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  max-width: 720px;
  width: calc(100% - 64px);
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 6px 20px rgba(17, 24, 39, 0.08);
  z-index: 1;
  transform: translateX(${(p) => (p.$open ? '0' : 'calc(100% + 16px)')});
  transition: transform 0.25s ease;
`;
const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
const Header = styled.h3`
  font-size: 14px;
  font-weight: 900;
  color: #111827;
  margin-bottom: 6px;
`;
const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #f3f4f6;
  }
`;

const KPIs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 6px;
`;
const Kpi = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px;
  strong {
    display: block;
    font-size: 18px;
    font-weight: 900;
    color: #1d4ed8;
  }
  em {
    display: block;
    font-style: normal;
    font-size: 12px;
    color: #6b7280;
    margin-top: 4px;
  }
`;
const Note = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 12px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 8px;
`;
const Card = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  h4 {
    font-size: 13px;
    color: #111827;
    margin: 0 0 6px;
  }
  p {
    font-size: 12px;
    color: #374151;
  }
`;
const ExportBtn = styled.button`
  margin-top: 10px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background: #1d4ed8;
    border-color: #1d4ed8;
  }
`;
const OpenHandle = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(17, 24, 39, 0.08);
  &:hover {
    background: #f3f4f6;
  }
`;
