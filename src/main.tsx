import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import GlobalStyle from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import LandingPage from './pages/landing';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <LandingPage />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
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
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
