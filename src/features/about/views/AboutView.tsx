import { useEffect } from 'react';

import { useMobileDrawer } from '@/shared/contexts/MobileDrawerContext';

const AboutView: React.FC = () => {
  const { setSections } = useMobileDrawer();

  useEffect(() => {
    setSections([
      {
        id: 'team',
        title: 'TEAM',
        items: [
          { label: 'Our Story', href: '/about#story' },
          { label: 'Team Members', href: '/about#team' },
          { label: 'Careers', href: '/about#careers' },
        ],
      },
      {
        id: 'contact',
        title: 'CONTACT',
        items: [
          { label: 'Email', href: 'mailto:contact@example.com' },
          { label: 'Location', href: '/about#location' },
        ],
      },
    ]);
  }, [setSections]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <p className="text-muted-foreground">회사 소개 내용이 여기에 표시됩니다.</p>
    </div>
  );
};

export default AboutView;
