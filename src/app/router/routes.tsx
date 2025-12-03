import { createBrowserRouter, Navigate } from 'react-router'

import { ROUTES } from '@core/constants/routes.constants'
import { LoginPage } from '@features/auth/pages/LoginPage'
import { RegisterPage } from '@features/auth/pages/RegisterPage'
import { HomePage } from '@features/home/pages/HomePage'
import { MyPage } from '@features/user/pages/MyPage'
import { Layout } from '@ui/components/layout/Layout'

// 404 페이지
const NotFoundPage: React.FC = () => (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground">Page Not Found</p>
        <a href={ROUTES.HOME} className="text-primary hover:underline">
          Go Home
        </a>
      </div>
    </div>
  )

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
])
