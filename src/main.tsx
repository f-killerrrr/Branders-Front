import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/globalStyle';
import AnalyzePage from '@/pages/analyze';
import LandingPage from '@/pages/landing';
import LoginPage from '@/pages/login';
import RegisterPage from '@/pages/register';
import ChatbotPage from '@/pages/chatbot';
import { theme } from '@/styles/theme';

const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </ThemeProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <LandingPage />,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <LoginPage />,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: () => <RegisterPage />,
});

const analyzeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/analyze',
  component: () => <AnalyzePage />,
});

const chatbotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chatbot',
  component: () => <ChatbotPage />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  analyzeRoute,
  chatbotRoute,
  // TODO: 자식 경로 여기에 추가
]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  if (import.meta.env.DEV) {
    root.render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    );
  } else {
    root.render(<RouterProvider router={router} />);
  }
}
