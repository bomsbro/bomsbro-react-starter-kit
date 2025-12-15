import { type ReactNode, useState } from 'react';
import { Link } from 'react-router';

import { Button } from '@ui/components/atoms/button';
import { FileText, Home, Info, Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

interface MobileDrawerProps {
  navLinks: NavLink[];
}

const iconMap: Record<string, ReactNode> = {
  HOME: <Home className="w-4 h-4" />,
  BLOG: <FileText className="w-4 h-4" />,
  ABOUT: <Info className="w-4 h-4" />,
};

export const MobileDrawer = ({ navLinks }: MobileDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white hover:bg-white/10"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-50 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 bg-white border-b">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* Apps Section */}
            <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col gap-2">
              <h3 className="text-sm font-bold text-gray-800">Apps</h3>
              <div className="flex bg-white align-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="flex h-10 items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    {iconMap[link.label] ?? <span className="w-4 h-4" />}
                  </Link>
                ))}
              </div>
            </div>

            {/* TODO 외부에서 주입된 메뉴 컴포넌트 */}
          </div>
        </div>
      </div>
    </>
  );
};
