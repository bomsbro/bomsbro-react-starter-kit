// 라우트 경로 (path만)
export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  MY_PAGE: '/mypage',
  NOT_FOUND: '/404',
} as const

// API 엔드포인트
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USER: {
    ME: '/user/me',
    LIST: '/users',
    DETAIL: (id: string) => `/users/${id}`,
  },
} as const
