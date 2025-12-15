import { useContext } from 'react';

import { MobileDrawerContext, type MobileDrawerContextType } from './MobileDrawerProvider';

export const useMobileDrawer = (): MobileDrawerContextType => {
  const context = useContext(MobileDrawerContext);
  if (!context) {
    throw new Error('useMobileDrawer must be used within MobileDrawerProvider');
  }
  return context;
};
