import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from '@core/constants/routes.constants'

// TODO: 실제 인증 상태는 authStore에서 가져와야 함
const useAuth = () => {
  // 임시로 false 반환
  return { isAuthenticated: false }
}

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />
  }

  return <Outlet />
}
