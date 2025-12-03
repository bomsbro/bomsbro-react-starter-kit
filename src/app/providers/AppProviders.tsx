import type { ReactNode } from 'react'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => (
    <>
      {/* TODO: Add providers here (e.g., QueryClientProvider, ThemeProvider) */}
      {children}
    </>
  )

