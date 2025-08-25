import styled from 'styled-components';
import Header from '@/components/mypage/Header';
import Button from '@/components/common/Button';
import { TextStyle } from '@/utils/styled';

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray[50]};
`;

const Middle = styled.div`
  width: 100vw;
  display: flex;
  padding: 40px 10px 10px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`;

const MiddleHeader = styled.div`
  display: flex;
  height: 80px;
  padding: 10px 25px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

// 정책페이지, 홈 > 정책페이지 정렬 위함
const MiddleHeaderWraper = styled.div`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px 25px;
`;

const MiddleHeadeItem1 = styled.div`
  ${TextStyle.h2}
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`;

const MiddleHeadeItem2 = styled.div`
  ${TextStyle.h4}
  color: ${({ theme }) => theme.color.gray[500]};
  text-decoration: none;
`;

// 개인정보 기입할 컨테이너
const Information = styled.div`
  display: flex;
  width: 1268px;
  padding: 0 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// 개인정보 입력할 수 있는 box 전체 Container
const InfoBoxContainer = styled.div`
  display: flex;
  width: 1218px;
  flex-direction: column;
  align-items: center;
`;

// 위의 컨테이너의 내부 row container
const InfoBoxContainerRow = styled.div`
  display: flex;
  width: 1218px;
  height: 100px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
`;

// 정보 입력되어 있는 박스 컨테이너
const InfoBox = styled.div`
  display: flex;
  width: 580px;
  height: 70px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid var(--Gray-300, #d1d5db);
`;

// 정보 입력칸
const InfoBoxWrite = styled.div`
  display: flex;
  width: 425px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.gray[100]};
  justify-content: right;
`;

const Title = styled.div`
  display: flex;
  width: 1198px;
  height: 47px;
  padding: 0 10px;
  align-items: center;
  gap: 10px;

  ${TextStyle.h4}
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`;

const WrapSearchBox = styled.div`
  display: flex;
  width: 1238px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BlueSearchbox = styled.div`
  display: flex;
  height: 100px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary[50]};
`;

const Searchbox = styled.div`
  display: flex;
  width: 470px;
  height: 44px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--Gray-300, #d1d5db);
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.gray[500]};
`;

const WrapedDownBox = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const MiniTitle = styled.div`
  display: flex;
  height: 70px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const MiniTitleRight = styled.div`
  display: flex;
  width: 390px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const ContentRowbox = styled.div`
  display: flex;
  width: 1218px;
  height: 165px;
  justify-content: space-between;
  align-items: center;
`;

const ContentBox = styled.div`
  display: flex;
  width: 592px;
  height: 165px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--Gray-300, #d1d5db);
`;

const ContentBottom = styled.div`
  display: flex;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const ContentMiddle = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const ContentFoot = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-end;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const DateJustify = styled.div`
  display: flex;
  width: 135px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

const DDay = styled.div`
  display: flex;
  width: 65px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.primary[300]};
  color: ${({ theme }) => theme.color.white};
`;

const Venture = styled.div`
  display: flex;
  width: 65px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--Primary-300, #93c5fd);
  ${TextStyle.caption}
  color: ${({ theme }) => theme.color.primary[400]};
`;

const Institution = styled.div`
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
`;

const ContentTitle = styled.div`
  ${TextStyle.h6}
  color: ${({ theme }) => theme.color.black};
`;

const Deadline = styled.div`
  ${TextStyle.bodyMedium}
  color: ${({ theme }) => theme.color.gray[700]};
`;

function Policy() {
  return (
    <Page>
      <Header />
      <Middle>
        <MiddleHeader>
          <MiddleHeaderWraper>
            <MiddleHeadeItem1>맞춤 지원 정책 찾기</MiddleHeadeItem1>
            <MiddleHeadeItem2>홈 {'>'} 맞춤 지원 정책 찾기</MiddleHeadeItem2>
          </MiddleHeaderWraper>
        </MiddleHeader>
        <Information>
          <InfoBoxContainer>
            <InfoBoxContainerRow>
              <InfoBox>
                지원대상
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
              <InfoBox>
                대구광역시
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
            </InfoBoxContainerRow>
            <InfoBoxContainerRow>
              <InfoBox>
                업종
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
              <InfoBox>
                소관기관
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
            </InfoBoxContainerRow>
          </InfoBoxContainer>
          <WrapSearchBox>
            <Title>상세검색</Title>
            <BlueSearchbox>
              <Searchbox>검색어를 입력해주세요</Searchbox>
              {/* 버튼 3개 */}
            </BlueSearchbox>
          </WrapSearchBox>
          <WrapedDownBox>
            <MiniTitle>
              총 70건의 검색결과:
              <MiniTitleRight> {/* 버튼3개 */} </MiniTitleRight>
            </MiniTitle>
            <ContentRowbox>
              <ContentBox>
                <ContentBottom>
                  <DateJustify>
                    <DDay>D-12</DDay>
                    <Venture>창업벤처</Venture>
                  </DateJustify>
                  <Institution>달서구청</Institution>
                </ContentBottom>
                <ContentMiddle>
                  <ContentTitle>대구광역시 달서구 2025년 스타트업 모집 공고</ContentTitle>
                </ContentMiddle>
                <ContentFoot>
                  <Deadline>2025-08-05 ~ 2025-08-28 까지 </Deadline>
                </ContentFoot>
              </ContentBox>
              <ContentBox>
                <ContentBottom>
                  <DateJustify>
                    <DDay>D-12</DDay>
                    <Venture>창업벤처</Venture>
                  </DateJustify>
                  <Institution>달서구청</Institution>
                </ContentBottom>
                <ContentMiddle>
                  <ContentTitle>대구광역시 달서구 2025년 스타트업 모집 공고</ContentTitle>
                </ContentMiddle>
                <ContentFoot>
                  <Deadline>2025-08-05 ~ 2025-08-28 까지 </Deadline>
                </ContentFoot>
              </ContentBox>
            </ContentRowbox>
            {/* 페이지 버튼 있어야 함 */}
          </WrapedDownBox>
        </Information>
      </Middle>
    </Page>
  );
}

export default Policy;
