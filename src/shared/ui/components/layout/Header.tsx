import { Link } from 'react-router';

import { MobileDrawer } from '@ui/components/atoms/MobileDrawer';

interface NavLink {
  label: string;
  href: string;
}

const defaultNavLinks: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT', href: '/about' },
];

interface HeaderProps {
  navLinks?: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks = defaultNavLinks }) => (
  <nav className="bg-[#2C4E9C] ">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-8 text-white">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="hidden md:block text-sm font-medium tracking-wider hover:opacity-80 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <MobileDrawer navLinks={navLinks} />
      </div>
    </div>
  </nav>
);

export default Header;
