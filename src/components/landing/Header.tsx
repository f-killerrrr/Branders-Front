import { TextStyle } from '@/utils/styled';
import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary[500]};
`;

const Container = styled.nav`
  width: 1240px;
  height: 80px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const NavigationItem = styled(Link)`
  ${TextStyle.h6}

  color: ${({ theme }) => theme.color.gray[50]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <div>
          {/* TODO: 로고 추가 */}
          <Navigation>
            <NavigationItem to="/analyze">아이템 1</NavigationItem>
            <NavigationItem to="/">아이템 2</NavigationItem>
            <NavigationItem to="/">아이템 3</NavigationItem>
          </Navigation>
        </div>
        <div>
          <Navigation>
            <NavigationItem to="/login">로그인</NavigationItem>
            <NavigationItem to="/register">회원가입</NavigationItem>
          </Navigation>
        </div>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
