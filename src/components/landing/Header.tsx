import { TextStyle } from '@/utils/styled';
import { Link, useNavigate } from '@tanstack/react-router';
import styled from 'styled-components';
import logo from '@/assets/Logo_white.svg';

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
          <Logo src={logo} alt="Logo" onClick={() => navigate({ to: '/' })} />
          <NavigationItem to="/chatbot">창업 Ai 챗봇</NavigationItem>
          <NavigationItem to="/analyze">상권 분석</NavigationItem>
          <NavigationItem to="/recommend">맞춤 지원 정책 추천</NavigationItem>
          <NavigationItem to="/community">커뮤니티</NavigationItem>
        </Navigation>
        <Navigation>
          <NavigationItem to="/login">로그인</NavigationItem>
          <NavigationItem to="/register">회원가입</NavigationItem>
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
