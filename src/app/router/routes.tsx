import { createBrowserRouter, Navigate } from 'react-router'

import { ROUTE_PATH } from '@core/constants/routes.constants'
import { LoginPage } from '@features/auth/pages/LoginPage'
import { RegisterPage } from '@features/auth/pages/RegisterPage'
import { HomePage } from '@features/home/pages/HomePage'
import { MyPage } from '@features/user/pages/MyPage'
import { Layout } from '@ui/components/layout/Layout'

import { ProtectedRoute } from './ProtectedRoute'

// 404 페이지
const NotFoundPage = () => (
  <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
    <div className="text-center space-y-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-muted-foreground">Page Not Found</p>
      <a href={ROUTE_PATH.HOME} className="text-primary hover:underline">
        Go Home
      </a>
    </div>
  </div>
)

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <Layout />,
    children: [
      // 공개 라우트
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATH.REGISTER,
        element: <RegisterPage />,
      },

      // 인증 필요 라우트
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTE_PATH.MY_PAGE,
            element: <MyPage />,
          },
        ],
      },

      // 404
      {
        path: ROUTE_PATH.NOT_FOUND,
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTE_PATH.NOT_FOUND} replace />,
      },
    ],
  },
])
