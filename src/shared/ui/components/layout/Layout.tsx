import type { ReactNode } from 'react';

import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
