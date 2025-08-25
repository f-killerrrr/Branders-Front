import { Link, useNavigate } from '@tanstack/react-router';
import styled from 'styled-components';
import { TextStyle } from '@/utils/styled';
import logo from '@/assets/Logo.svg';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.gray[50]};
  background: var(--Gray-50, #f9fafb);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.05);
`;

const Container = styled.nav`
  width: 1240px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
`;

const NavigationItem = styled(Link)`
  ${TextStyle.h6}
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  height: 60px;
  object-fit: cover;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <Logo
            src={logo}
            onClick={() => {
              navigate({ to: '/' });
            }}
          />
          <NavigationItem>창업 Ai 챗봇</NavigationItem>
          <NavigationItem>맞춤 지원 정책 추천</NavigationItem>
          <NavigationItem>상권 분석</NavigationItem>
        </Navigation>
        <Navigation>
          <NavigationItem to="/logout">로그아웃</NavigationItem>
          <NavigationItem to="/">마이페이지</NavigationItem>
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
