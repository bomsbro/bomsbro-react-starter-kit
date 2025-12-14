import type { ReactNode } from 'react';

import { MobileDrawerProvider } from '@/shared/contexts/MobileDrawerContext';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <MobileDrawerProvider>
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
    <Footer />
  </MobileDrawerProvider>
);

export default Layout;
