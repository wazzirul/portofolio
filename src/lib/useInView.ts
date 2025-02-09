import { useActiveSectionContext } from '@/containers/active-section';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export function useSectionInView(section: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, timeOfLastClick, section]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    ref,
    inView,
  };
}
