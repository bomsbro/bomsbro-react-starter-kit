import { ReactNode } from 'react'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <>
      {/* TODO: Add providers here (e.g., QueryClientProvider, ThemeProvider) */}
      {children}
    </>
  )
}

