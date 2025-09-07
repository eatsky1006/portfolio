import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const elementVisible = rect.top < viewHeight * (1 - threshold) && rect.bottom > viewHeight * threshold;
      
      if (elementVisible) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0px)';
      }
    };

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    // Listen for both Lenis and native scroll events
    const handleLenisScroll = () => handleScroll();
    const handleNativeScroll = () => handleScroll();

    window.addEventListener('lenis-scroll', handleLenisScroll);
    window.addEventListener('scroll', handleNativeScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('lenis-scroll', handleLenisScroll);
      window.removeEventListener('scroll', handleNativeScroll);
    };
  }, [threshold]);

  return ref;
};
