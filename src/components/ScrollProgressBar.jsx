/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const ScrollProgressBar = ({
    height = '3px',
    color = '#9c83ff',
    backgroundColor = 'rgba(255, 255, 255, 0.1)',
    position = 'fixed',
    zIndex = 9999
}) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const progressRef = useRef(0);

    useEffect(() => {
        // Primary method: Listen for Lenis scroll events (real-time)
        const handleLenisScroll = (event) => {
            if (event.detail && typeof event.detail.progress === 'number') {
                const newProgress = event.detail.progress;
                // Remove the ref check for instant updates
                setScrollProgress(newProgress);
                progressRef.current = newProgress;
            }
        };

        // Native scroll fallback for when Lenis is not available
        const handleNativeScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
            
            // Only update if there's a meaningful change and Lenis events aren't working
            if (Math.abs(progress - progressRef.current) > 0.001) {
                setScrollProgress(progress);
                progressRef.current = progress;
            }
        };

        // Listen for Lenis scroll events (highest priority)
        window.addEventListener('lenis-scroll', handleLenisScroll);

        // Fallback: Native scroll listener (only if Lenis isn't working)
        let fallbackTimeout = setTimeout(() => {
            window.addEventListener('scroll', handleNativeScroll, { passive: true });
        }, 100); // Give Lenis time to initialize

        return () => {
            window.removeEventListener('lenis-scroll', handleLenisScroll);
            window.removeEventListener('scroll', handleNativeScroll);
            clearTimeout(fallbackTimeout);
        };
    }, []);

    return (
        <Box
            sx={{
                position: position,
                top: 0,
                left: 0,
                width: '100%',
                height: height,
                backgroundColor: backgroundColor,
                zIndex: zIndex,
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    width: `${scrollProgress * 100}%`,
                    backgroundColor: color,
                    // Removed transition for instant updates
                    background: `linear-gradient(90deg, ${color}, #ff6b6b)`,
                    willChange: 'width', // Optimize for animations
                }}
            />
        </Box>
    );
};

export default ScrollProgressBar;
