import { Box, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);

  return (
    <>
      <Helmet>
        <title>Muhammad Ahmad | Full-Stack & Web3 Developer</title>
        <meta name="description" content="Learn about Muhammad Ahmad, a versatile full-stack developer with expertise in both web development and blockchain technologies including React, Node.js, and Web3 solutions." />
      </Helmet>
      <Container id="about">
        <Box
          sx={{
            py: { xs: 8, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3"
            align="center" sx={{ 
              fontWeight: 'bold', 
              letterSpacing: '3px', 
              fontFamily: 'Playfair Display', 
              fontSize: { xs: '32px', sm: '40px', md: '47.42px' },
              lineHeight: { xs: 1.3, md: 1.2 }
            }}>
            ABOUT ME
          </Typography>
          <Typography gutterBottom align="center" sx={{
            mb: 2, 
            opacity: 0.7,
            background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.2em',
            fontSize: { xs: '12px', md: '14px' }
          }}>
            EXPLORE NOW
          </Typography>
          <Box sx={{ 
            width: '100%', 
            maxWidth: '600px',
            px: { xs: 2, md: 0 },
            position: 'relative',
            '&::after': isTextHovered ? {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '2px',
              background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
              borderRadius: '1px',
              transition: 'width 0.3s ease'
            } : {}
          }}
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
          >
            <Typography variant="body1" sx={{ 
              mb: 3,
              fontSize: { xs: '0.875rem', md: '1rem' },
              lineHeight: { xs: 1.6, md: 1.5 },
              transition: 'opacity 0.3s ease',
              opacity: isTextHovered ? 1 : 0.9
            }}>
              I am <strong>Muhammad Ahmad</strong>, a <strong>Full-stack and Web3 developer</strong> specializing in <strong>React.js, Node.js, and blockchain technologies</strong>. With extensive experience in <strong>Solidity smart contracts and DeFi applications</strong>, I build seamless web experiences that bridge traditional and decentralized technologies.
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3,
              fontSize: { xs: '0.875rem', md: '1rem' },
              lineHeight: { xs: 1.6, md: 1.5 },
              transition: 'opacity 0.3s ease',
              opacity: isTextHovered ? 1 : 0.9
            }}>
              I focus on creating <strong>innovative DeFi solutions, trading platforms, and Web3 integrations</strong> using modern frameworks and blockchain protocols. Always exploring new technologies to solve complex problems with clean, efficient code.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;