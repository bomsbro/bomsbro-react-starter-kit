import MobileDrawer from '@/shared/ui/components/atoms/MobileDrawer';

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
  <nav className="bg-[#2C4E9C] text-white ">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden md:block text-sm font-medium tracking-wider hover:opacity-80 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <MobileDrawer />
      </div>
    </div>
  </nav>
);

export default Header;
