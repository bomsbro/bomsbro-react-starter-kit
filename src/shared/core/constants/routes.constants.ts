export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  MY_PAGE: '/mypage',
  USER_DETAIL: (userId: string) => `/user/${userId}`,
} as const

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

