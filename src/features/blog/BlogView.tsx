import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { ChevronDown, ChevronRight } from 'lucide-react';

import { useMobileDrawer } from '@/shared/contexts/MobileDrawerContext';

const homeCategories = ['TECHNOLOGY', 'AUTOMOTIVE', 'FINANCE', 'POLITICS', 'CULTURE', 'SPORTS'];

// 블로그 전용 모바일 메뉴 컴포넌트
const BlogMobileMenu = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <>
      {/* Categories */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full p-4 text-left font-semibold bg-linear-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
        >
          <span className="text-gray-800">CATEGORIES</span>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
            {expandedSection === 'categories' ? (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </div>
        </button>

        {expandedSection === 'categories' && (
          <div className="px-4 pb-4 pt-2 space-y-1 bg-white">
            <Link
              to="/blog"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">All Posts</span>
            </Link>
            <Link
              to="/blog?category=technology"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">Technology</span>
            </Link>
            <Link
              to="/blog?category=automotive"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">Automotive</span>
            </Link>
            <Link
              to="/blog?category=finance"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">Finance</span>
            </Link>
          </div>
        )}
      </div>

      {/* Archive */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <button
          onClick={() => toggleSection('archive')}
          className="flex items-center justify-between w-full p-4 text-left font-semibold bg-linear-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
        >
          <span className="text-gray-800">ARCHIVE</span>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
            {expandedSection === 'archive' ? (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </div>
        </button>

        {expandedSection === 'archive' && (
          <div className="px-4 pb-4 pt-2 space-y-1 bg-white">
            <Link
              to="/blog?year=2025"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">2025</span>
            </Link>
            <Link
              to="/blog?year=2024"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">2024</span>
            </Link>
            <Link
              to="/blog?year=2023"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">2023</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

const BlogView: React.FC = () => {
  const { setMenuContent } = useMobileDrawer();

  useEffect(() => {
    setMenuContent(<BlogMobileMenu />);
  }, [setMenuContent]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-muted-foreground">블로그 콘텐츠가 여기에 표시됩니다.</p>
      </div>

      <nav className="bg-[#E9ECEF] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-8 py-4 flex-wrap">
            {homeCategories.map((category) => (
              <li key={category}>
                <a
                  href={`#${category.toLowerCase()}`}
                  className="text-sm font-semibold tracking-wide hover:text-blue-600 transition-colors"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default BlogView;
