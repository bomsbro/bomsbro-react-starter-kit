import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { ChevronDown, ChevronRight } from 'lucide-react';

import { useMobileDrawer } from '@/shared/contexts/MobileDrawerContext';

// About 전용 모바일 메뉴 컴포넌트
const AboutMobileMenu = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <>
      {/* Team */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <button
          onClick={() => toggleSection('team')}
          className="flex items-center justify-between w-full p-4 text-left font-semibold bg-linear-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
        >
          <span className="text-gray-800">TEAM</span>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
            {expandedSection === 'team' ? (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </div>
        </button>

        {expandedSection === 'team' && (
          <div className="px-4 pb-4 pt-2 space-y-1 bg-white">
            <Link
              to="/about#story"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">Our Story</span>
            </Link>
            <Link
              to="/about#team"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">Team Members</span>
            </Link>
            <Link
              to="/about#careers"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">Careers</span>
            </Link>
          </div>
        )}
      </div>

      {/* Contact */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <button
          onClick={() => toggleSection('contact')}
          className="flex items-center justify-between w-full p-4 text-left font-semibold bg-linear-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
        >
          <span className="text-gray-800">CONTACT</span>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
            {expandedSection === 'contact' ? (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </div>
        </button>

        {expandedSection === 'contact' && (
          <div className="px-4 pb-4 pt-2 space-y-1 bg-white">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">Email</span>
            </a>
            <Link
              to="/about#location"
              className="flex items-center gap-3 p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span className="font-medium">Location</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

const AboutView: React.FC = () => {
  const { setMenuContent } = useMobileDrawer();

  useEffect(() => {
    setMenuContent(<AboutMobileMenu />);
  }, [setMenuContent]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <p className="text-muted-foreground">회사 소개 내용이 여기에 표시됩니다.</p>
    </div>
  );
};

export default AboutView;
