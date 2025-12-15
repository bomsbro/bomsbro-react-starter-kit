import type { ReactNode } from 'react';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => (
  <>
    {/* TODO: Add providers here (e.g., QueryClientProvider, ThemeProvider) */}
    {children}
  </>
);

export default AppProviders;
