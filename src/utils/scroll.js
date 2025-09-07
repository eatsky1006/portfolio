// Smooth scroll utility using Lenis
export const scrollToElement = (elementId, offset = 0, duration = 1.2) => {
  const element = document.getElementById(elementId);
  if (element && window.lenis) {
    // Calculate position with offset
    const elementPosition = element.offsetTop - offset;
    window.lenis.scrollTo(elementPosition, {
      duration: duration,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic ease-out for smooth deceleration
      onComplete: () => {
        // Update URL hash without jumping
        if (elementId !== "hero") {
          window.history.replaceState(null, null, `#${elementId}`);
        }
      },
    });
  } else {
    // Fallback to native scrollIntoView if Lenis is not available
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // Update URL hash
    if (elementId !== "hero") {
      window.history.replaceState(null, null, `#${elementId}`);
    }
  }
};

// Alternative method using element selector
export const scrollToSelector = (selector, offset = 0, duration = 1.2) => {
  const element = document.querySelector(selector);
  if (element && window.lenis) {
    const elementPosition = element.offsetTop - offset;
    window.lenis.scrollTo(elementPosition, {
      duration: duration,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Consistent easing
    });
  } else {
    // Fallback to native scrollIntoView
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Scroll to top utility
export const scrollToTop = (duration = 1.2) => {
  if (window.lenis) {
    window.lenis.scrollTo(0, {
      duration: duration,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Smooth easing for top scroll
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.history.replaceState(null, null, window.location.pathname);
};

// Get current scroll progress (0-1)
export const getScrollProgress = () => {
  if (window.lenis) {
    return window.lenis.progress || 0;
  }
  // Fallback calculation using modern scrollY
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
};

// Stop/start Lenis scrolling (useful for modals, etc.)
export const toggleLenisScroll = (enable = true) => {
  if (window.lenis) {
    if (enable) {
      window.lenis.start();
    } else {
      window.lenis.stop();
    }
  }
};
