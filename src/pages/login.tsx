import axios from 'axios';
import styled from 'styled-components';

import AuthForm from '@/components/login/AuthForm';
import LogoBox from '@/components/login/LogoBox';
import type User from '@/interfaces/User';

const Page = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.main`
  width: 1000px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Right = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Divider = styled.div`
  width: 1px;
  height: 420px;
  background: #d1d5db;
  margin: 0 40px;
`;

export default function LoginPage() {
  const handleLogin = async (id: string, pw: string) => {
    const response = await axios.post<User>('/userinfo/login', { loginId: id, password: pw });
    const data = response.data;

    localStorage.setItem('user', JSON.stringify(data));
  };

  return (
    <Page>
      <Container>
        <Left>
          <LogoBox />
        </Left>

        <Divider />

        <Right>
          <AuthForm onSubmit={handleLogin} />
        </Right>
      </Container>
    </Page>
  );
}
