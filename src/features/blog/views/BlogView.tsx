import { useEffect } from 'react';

import { useMobileDrawer } from '@/shared/contexts/MobileDrawerContext';

const BlogView: React.FC = () => {
  const { setSections } = useMobileDrawer();

  useEffect(() => {
    setSections([
      {
        id: 'categories',
        title: 'CATEGORIES',
        items: [
          { label: 'All Posts', href: '/blog' },
          { label: 'Technology', href: '/blog?category=technology' },
          { label: 'Automotive', href: '/blog?category=automotive' },
          { label: 'Finance', href: '/blog?category=finance' },
        ],
      },
      {
        id: 'archive',
        title: 'ARCHIVE',
        items: [
          { label: '2025', href: '/blog?year=2025' },
          { label: '2024', href: '/blog?year=2024' },
          { label: '2023', href: '/blog?year=2023' },
        ],
      },
    ]);
  }, [setSections]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-muted-foreground">블로그 콘텐츠가 여기에 표시됩니다.</p>
    </div>
  );
};

export default BlogView;
