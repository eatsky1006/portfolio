/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Box, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { scrollToTop } from '../utils/scroll';

export const ScrollToTopButton = ({ showAfter = 300 }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const handleScroll = (event) => {
            if (event.detail && typeof event.detail.scroll === "number") {
                setIsVisible(event.detail.scroll > showAfter)
            }
        }

        window.addEventListener("lenis-scroll", handleScroll)

        const handleNativeScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            setIsVisible(scrollTop > showAfter)
        }

        window.addEventListener("scroll", handleNativeScroll)

        return () => {
            window.removeEventListener("lenis-scroll", handleScroll)
            window.removeEventListener("scroll", handleNativeScroll)
        }
    }, [showAfter])

    return (
        <Zoom in={isVisible}>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 32,
                    right: 32,
                    zIndex: 9998,
                    width: 52,
                    height: 52,
                    borderRadius: "16px",
                    background: isHovered
                        ? "linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)"
                        : "rgba(255, 255, 255, 0.1)",
                    backdropFilter: isHovered ? "none" : "blur(10px)",
                    border: isHovered ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.4s ease",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: isHovered ? "0 15px 35px rgba(156,131,255,0.4)" : "0 8px 32px rgba(0, 0, 0, 0.12)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => scrollToTop(1.5)}
            >
                <KeyboardArrowUp
                    sx={{
                        color: isHovered ? "#000000" : "#ffffff",
                        fontSize: 24,
                        transition: "all 0.3s ease",
                    }}
                />
            </Box>
        </Zoom>
    )
}

export default ScrollToTopButton;
