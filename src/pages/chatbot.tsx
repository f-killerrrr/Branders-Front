import styled from 'styled-components';
import Button from '@/components/common/Button';
import { TextStyle } from '@/utils/styled';

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray[50]};
`;

const LeftPage = styled.div`
  display: flex;
  width: 30%;
  height: 1080px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.color.gray[100]};
`;

const LeftMenu = styled.div`
  display: flex;
  height: 80px;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  ${TextStyle.h4}
  color: ${({ theme }) => theme.color.black};
`;

const ChatList = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const RightPage = styled.div`
  display: flex;
  width: flex;
  height: 1083px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const RightTitle = styled.div`
  display: flex;
  height: 80px;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  ${TextStyle.h3}
  color: ${({ theme }) => theme.color.black};
`;

const ChatPage = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Input = styled.div`
  display: flex;
  height: 120px;
  padding: 25px 211px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
`;

const StartWrap = styled.div`
  display: flex;
  width: 977px;
  height: 232px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StartTitle = styled.div`
  ${TextStyle.h2}
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  white-space: pre-line;
  align-items: center;
  text-align: center;
`;

const QButtonWrap = styled.div`
  display: grid;
  width: 600px;
  height: 98px;
  row-gap: 10px;
  column-gap: 10px;
  flex-shrink: 0;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const SendWrap = styled.div`
  display: flex;
  height: flex;
  padding: 25px 211px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
`;

const Menu = styled.img``;
const User = styled.img``;
const Send = styled.img``;

function Chatbot() {
  return (
    <Page>
      <LeftPage>
        <LeftMenu>
          채팅
          <Menu src="/src/assets/Menu.svg" alt="메뉴" />
        </LeftMenu>
        <ChatList></ChatList>
      </LeftPage>
      <RightPage>
        <RightTitle>
          Branders
          <User src="/src/assets/account.svg" alt="user" />
        </RightTitle>
        <ChatPage>
          <StartWrap>
            <StartTitle>{`환영합니다!
            창업과 관련된 질문을 해보세요.`}</StartTitle>
          </StartWrap>
          <QButtonWrap></QButtonWrap>
        </ChatPage>
        <Input>
          <Send src="/src/assets/send.svg" alt="send" />
        </Input>
      </RightPage>
    </Page>
  );
}

export default Chatbot;
