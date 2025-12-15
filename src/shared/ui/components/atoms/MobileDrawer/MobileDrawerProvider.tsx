import { createContext, type ReactNode, useCallback, useMemo, useState } from 'react';

export interface MobileDrawerContextType {
  menuContent: ReactNode | null;
  setMenuContent: (content: ReactNode | null) => void;
  clearMenuContent: () => void;
}

export const MobileDrawerContext = createContext<MobileDrawerContextType | null>(null);

export const MobileDrawerProvider = ({ children }: { children: ReactNode }) => {
  const [menuContent, setMenuContentInternal] = useState<ReactNode | null>(null);

  const setMenuContent = useCallback((content: ReactNode | null) => {
    setMenuContentInternal(content);
  }, []);

  const clearMenuContent = useCallback(() => {
    setMenuContentInternal(null);
  }, []);

  const value = useMemo(
    () => ({ menuContent, setMenuContent, clearMenuContent }),
    [menuContent, setMenuContent, clearMenuContent],
  );

  return <MobileDrawerContext.Provider value={value}>{children}</MobileDrawerContext.Provider>;
};
