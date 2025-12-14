import { useState } from 'react';

import { Button } from '@ui/components/atoms/button';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

import { type DrawerSection, useMobileDrawer } from '@/shared/contexts/MobileDrawerContext';

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const { sections } = useMobileDrawer();

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleItemClick = (onClick?: () => void) => {
    if (onClick) {
      onClick();
    }
    setIsOpen(false);
  };

  const renderSection = (section: DrawerSection) => (
    <div key={section.id} className="mb-4">
      <button
        onClick={() => toggleSection(section.id)}
        className="flex items-center justify-between w-full p-3 text-left font-semibold hover:bg-gray-100 rounded-lg transition-colors"
      >
        <span>{section.title}</span>
        {expandedSection === section.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      {expandedSection === section.id && (
        <div className="ml-4 mt-2 space-y-1">
          {section.items.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <h3 className="font-semibold text-sm mb-2 p-2">{item.label}</h3>
                  <div className="space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block p-2 pl-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                        onClick={() => handleItemClick(child.onClick)}
                      >
                        · {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => handleItemClick(item.onClick)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

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
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">Menu</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {sections.length > 0 ? (
              sections.map(renderSection)
            ) : (
              <p className="text-gray-500 text-center py-4">메뉴가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
