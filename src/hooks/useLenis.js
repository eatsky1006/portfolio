import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with highly optimized settings for ultra-smooth scrolling
    const lenis = new Lenis({
      duration: 1.5, // Slightly longer for more luxurious feel
      easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic ease-out for smoother deceleration
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      smoothTouch: false, // Keep disabled for mobile performance
      wheelMultiplier: 0.8, // Reduced for finer control
      touchMultiplier: 1.5, // Adjusted for better touch response
      infinite: false, // Disable infinite scrolling
      normalizeWheel: true, // Normalize wheel events across browsers
      syncTouch: true, // Better touch synchronization
      syncTouchLerp: 0.1, // Smooth touch interpolation
      touchInertiaMultiplier: 25, // Reduced for more controlled inertia
      gestureDirection: 'vertical', // Only vertical scrolling
      lerp: 0.08, // Lower value for smoother interpolation (key for butter smoothness!)
    });

    // Make Lenis instance available globally for scroll utilities
    window.lenis = lenis;

    // Add scroll listener with better performance
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // Update scroll progress with CSS custom property for better performance
      document.documentElement.style.setProperty('--scroll-progress', progress.toString());
      
      // Dispatch custom event immediately without requestAnimationFrame for instant updates
      window.dispatchEvent(new CustomEvent('lenis-scroll', {
        detail: { scroll, limit, velocity, direction, progress }
      }));
    });

    // Optimized animation frame loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle browser navigation (back/forward buttons)
    const handleHistoryChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          lenis.scrollTo(element, { duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
        }
      }
    };

    window.addEventListener('popstate', handleHistoryChange);

    // Enhanced cleanup function
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('popstate', handleHistoryChange);
      delete window.lenis;
      lenis.destroy();
    };
  }, []);
};
