import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export interface DrawerMenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  children?: DrawerMenuItem[];
}

export interface DrawerSection {
  id: string;
  title: string;
  items: DrawerMenuItem[];
}

export interface MobileDrawerContextType {
  sections: DrawerSection[];
  setSections: (sections: DrawerSection[]) => void;
  addSection: (section: DrawerSection) => void;
  clearSections: () => void;
}

const MobileDrawerContext = createContext<MobileDrawerContextType | null>(null);

export const MobileDrawerProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setInternalSections] = useState<DrawerSection[]>([]);

  const setSections = useCallback((newSections: DrawerSection[]) => {
    setInternalSections(newSections);
  }, []);

  const addSection = useCallback((section: DrawerSection) => {
    setInternalSections((prev) => {
      const exists = prev.some((s) => s.id === section.id);
      if (exists) {
        return prev.map((s) => (s.id === section.id ? section : s));
      }
      return [...prev, section];
    });
  }, []);

  const clearSections = useCallback(() => {
    setInternalSections([]);
  }, []);

  const value = useMemo(
    () => ({ sections, setSections, addSection, clearSections }),
    [sections, setSections, addSection, clearSections],
  );

  return <MobileDrawerContext.Provider value={value}>{children}</MobileDrawerContext.Provider>;
};

export const useMobileDrawer = (): MobileDrawerContextType => {
  const context = useContext(MobileDrawerContext);
  if (!context) {
    throw new Error('useMobileDrawer must be used within a MobileDrawerProvider');
  }
  return context;
};

export default MobileDrawerContext;

