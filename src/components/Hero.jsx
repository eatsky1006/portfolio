import { Box, Typography, Container, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import myProfile from "../assets/Me.png";
import { theme } from '../theme';
import { useState } from 'react';
import { scrollToElement } from '../utils/scroll';

// eslint-disable-next-line react/prop-types
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Helmet>
        <title>Karabach Anton | Associate Software Engineer | Full-Stack & Blockchain Developer</title>
        <meta name="description" content="Karabach Anton is an Associate Software Engineer specializing in full-stack development and Web3 technologies including smart contracts, DeFi protocols, React.js, Node.js, and Solidity." />
        <meta name="keywords" content="Karabach Anton, Associate Software Engineer, Web3 developer, Blockchain engineer, Smart contracts, DeFi, React developer, Full-stack developer, Solidity, Ethereum, dApps" />
        <meta name="author" content="Karabach Anton" />
        <meta property="og:title" content="Karabach Anton | Associate Software Engineer | Web3 Developer" />
        <meta property="og:description" content="Associate Software Engineer specializing in full-stack development and Web3 technologies" />
      </Helmet>
      <Container maxWidth="lg" id="home">
        <header>
          <Box
            component="section"
            sx={{
              paddingTop: { xs: 4, md: 8 },
              paddingBottom: { xs: 4, md: 0 },
              minHeight: { xs: 'auto', md: '85vh' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <Box sx={{ maxWidth: '600px', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src={myProfile}
                loading="lazy"
                alt="Karabach Anton - Associate Software Engineer and Web3 Developer"
                sx={{
                  width: { xs: 120, md: 150 },
                  height: { xs: 120, md: 150 },
                  borderRadius: '50%',
                  mb: { xs: 2, md: 3 },
                  mx: 'auto'
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  ...theme.typography.h1,
                  fontSize: { xs: '1.75rem', sm: '2.5rem', md: '4rem' },
                  lineHeight: { xs: 1.1, sm: 1.2, md: 1.5 },
                  paddingBottom: { xs: 0.75, md: 0 },  // Reduced from 2 to 0.75 for xs
                  mb: 0  // Added margin-bottom 0
                }}
              >
                Karabach Anton
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  mb: 1.5,  // Adjusted from 1 to 1.5
                  mt: 0,    // Explicitly setting margin-top to 0
                  opacity: 0.85
                }}
              >
                Associate Software Engineer
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontFamily: 'Poppins',
                  fontSize: { xs: '1.125rem', sm: '1.375rem', md: '1.714rem' },
                  mb: { xs: 2, md: 3 },
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.94) 70%, rgba(255,144,81,1) 75%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: isHovered ? '0 2px 5px rgba(156,131,255,0.4)' : '0 1px 3px rgba(156,131,255,0.25)',
                    position: 'relative',
                    cursor: 'default',
                    transition: 'text-shadow 0.3s ease, transform 0.2s ease',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                    display: 'inline-block'
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Full-Stack & Blockchain Developer
                </span>
                <span style={{
                  transition: 'transform 0.2s ease',
                  display: 'inline-block',
                  marginLeft: '3px',
                  transform: isHovered ? 'translateY(-4px) rotate(10deg)' : 'translateY(0) rotate(0deg)'
                }}>
                  🚀
                </span>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: 600,
                  mb: 4,
                  lineHeight: { xs: 1.8, md: 1.6 },
                  px: { xs: 2, md: 0 }
                }}
              >
                Hey there!  I'm Anton, a Senior Full Stack & Blockchain Developer,  with over 7 years of experience building high-performance web applications and decentralized solutions.
                <br /><br />
                I specialize in bridging Web2 and Web3, crafting everything from scalable backend systems and interactive frontends to secure, gas-optimized smart contracts. My expertise spans React, Next.js, Node.js, Solidity, Web3.js, Ethers.js, PostgreSQL, AWS, and Docker.
                <br /><br />
                Passionate about blockchain innovation, I’ve contributed to DeFi protocols, NFT platforms, and DAO infrastructures, helping startups and enterprises turn bold ideas into reliable, user-centric products. Beyond coding, I enjoy mentoring engineers, leading development teams, and solving complex architectural challenges.
                <br /><br />
                I thrive at the intersection of technology and innovation, delivering solutions that empower users and push the boundaries of what’s possible in Web3.
              </Typography>

              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToElement('contact')}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 28,
                  px: { xs: 4, md: 6 },
                  py: { xs: 1, md: 1.5 },
                  border: '1px solid #585858',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(255, 255, 255, 0.15)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transform: 'translateX(-100%)',
                  },
                  '&:hover::after': {
                    transform: 'translateX(100%)',
                    transition: 'transform 0.6s ease-in-out',
                  },
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>
        </header>
      </Container>
    </>
  );
};

export default Hero;