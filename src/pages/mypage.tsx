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

// 마이페이지, 홈 > 마이페이지 정렬 위함
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
  color: ${({ theme }) => theme.color.gray[500]};
  text-decoration: none;
`;

function MyPage() {
  return (
    <Page>
      <Header />
      <Middle>
        <MiddleHeader>
          <MiddleHeaderWraper>
            <MiddleHeadeItem1>마이페이지</MiddleHeadeItem1>
            <MiddleHeadeItem2>홈 {'>'} 마이페이지</MiddleHeadeItem2>
          </MiddleHeaderWraper>
        </MiddleHeader>
        <Information>
          <Title>기본 정보</Title>
          <InfoBoxContainer>
            <InfoBoxContainerRow>
              <InfoBox>
                이름
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
              <InfoBox>
                아이디
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
            </InfoBoxContainerRow>
            <InfoBoxContainerRow>
              <InfoBox>
                이메일
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
              <InfoBox>
                비밀번호
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
            </InfoBoxContainerRow>
            <InfoBoxContainerRow>
              <InfoBox>
                생년월일
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
            </InfoBoxContainerRow>
          </InfoBoxContainer>
        </Information>
        {/* 버튼 들어가야 함 */}
        <Information>
          <Title>창업 정보</Title>
          <InfoBoxContainer>
            <InfoBoxContainerRow>
              <InfoBox>
                생년월일
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
              <InfoBox>
                생년월일
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
            </InfoBoxContainerRow>
            <InfoBoxContainerRow>
              <InfoBox>
                생년월일
                <InfoBoxWrite></InfoBoxWrite>
              </InfoBox>
            </InfoBoxContainerRow>
          </InfoBoxContainer>
        </Information>
        <Information>
          <Title>아카이브</Title>
          <InfoBoxContainer>
            <InfoBoxContainerRow>
              <InfoBox>생성된 PDF가 없습니다.</InfoBox>
            </InfoBoxContainerRow>
          </InfoBoxContainer>
        </Information>
        <Information>
          <Title>구독 관리</Title>
          <InfoBoxContainer>
            <InfoBoxContainerRow>
              <InfoBox>
                구독 여부
                <InfoBoxWrite>X</InfoBoxWrite>
              </InfoBox>
            </InfoBoxContainerRow>
          </InfoBoxContainer>
        </Information>
      </Middle>
    </Page>
  );
}

export default MyPage;
