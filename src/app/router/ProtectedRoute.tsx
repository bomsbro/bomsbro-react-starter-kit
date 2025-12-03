import { Navigate, Outlet } from 'react-router'

import { ROUTE_PATH } from '@core/constants/routes.constants'

// TODO: 실제 인증 상태는 authStore에서 가져와야 함
const useAuth = () => ({ isAuthenticated: false })

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATH.LOGIN} replace />
  }

  return <Outlet />
}
