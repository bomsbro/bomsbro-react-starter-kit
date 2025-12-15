import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
