import Header from '@/components/landing/Header';
import Post from '@/components/landing/Post';
import styled, { useTheme } from 'styled-components';

import landing_title from '@/assets/landing_title.png';
import landing_chatbot from '@/assets/landing_chatbot.png';
import landing_suggestion from '@/assets/landing_suggestion.png';
import landing_analysis from '@/assets/landing_analysis.png';

const Page = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

function LandingPage() {
  const theme = useTheme();

  return (
    <Page>
      <Header />
      <Post
        title={`청년 창업의 새로운 시작,
          스마트한 선택`}
        description={`AI 기반 맞춤 컨설팅과 실시간 시장 분석으로 성공 확률을 높이세요.
          청년 창업가들이 선택한 믿을 수 있는 파트너입니다.`}
        backgroundColor={theme.color.primary[500]}
        image={landing_title}
        postType="title"
      />
      <Post
        title={`궁금한 건 바로 물어보세요`}
        description={`창업 관련 사소한 질문부터 복잡한 고민까지, AI 컨설턴트가 24시간 답변해드려요.
실시간으로 상담받고 언제든 다시 확인 가능해요.`}
        backgroundColor={theme.color.white}
        image={landing_chatbot}
        buttonTitle="AI 에게 상담받기"
        postType="content"
        contentDirection="reverse"
      />
      <Post
        title={`내 정보만 입력하면,
딱 맞는 정책 자동 추천`}
        description={`나이, 창업 진행도, 희망 업종을 바탕으로 최적의 지원 정책을 찾아드려요.
지원금 규모부터 신청 조건까지, 원하는 필터로 정확한 정보만 확인하세요.`}
        backgroundColor={theme.color.primary[100]}
        image={landing_suggestion}
        buttonTitle="맞춤형 정책 추천받기"
        postType="content"
      />
      <Post
        title={`지역 선택부터 시장 분석까지,
데이터가 답해드려요`}
        description={`관심 지역의 상권 분석부터 고객층 데이터까지 한 번에 확인하세요.
감이 아닌 데이터로 창업 성공 확률을 높여보세요.`}
        backgroundColor={theme.color.white}
        image={landing_analysis}
        buttonTitle="분석 결과 확인하기"
        postType="content"
        contentDirection="reverse"
      />
      {/** TODO: footer 추가 */}
    </Page>
  );
}

export default LandingPage;
