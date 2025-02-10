import myProfile from "../assets/Me.png";
import { Box, Typography, Button, Container } from '@mui/material';
import { theme } from '../theme';

// eslint-disable-next-line react/prop-types
const Hero = ({ onContactClick }) => {
  return (
    <Container>
      <Box
        component="section"
        sx={{
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Box sx={{ maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component="img"
            src={myProfile}
            loading="lazy"
            alt="Profile"
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              mb: 3,
              mx: 'auto'
            }}
          />
          <Typography
            variant="h1"
            sx={{
              ...theme.typography.h1,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              lineHeight: { xs: 1.2, md: 1.5 }
            }}
          >
            Muhammad Ahmad!
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              fontSize: { xs: '22px', sm: '27.42px' },
              mb: 3
            }}
          >
            Turning Ideas into Code &
            <span
              style={{
                background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.94) 70%, rgba(255,144,81,1) 75%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Making the Web Cooler
            </span>🚀
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mb: 4,
              lineHeight: 1.6
            }}
          >
           <strong>Hey!</strong> I&apos;m a full-stack developer who loves building efficient, scalable, and intuitive applications.
           I am a  Software Engineer by day, <strong>Web3 explorer</strong> by night.
            I love building<strong> scalable, User-Friendly</strong> apps that make life easier.
            <br /><br />
            Whether it&apos;s <strong> Backend magic</strong> or <strong> Web3 wonders</strong>, I&apos;m always up for a challenge.
            Also, I occasionally contribute to <strong>open-source</strong> projects.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={onContactClick}
            sx={{
              borderRadius: 28,
              px: 6,
              py: 1.5,
              border: '1px solid #585858',
              backgroundColor: '#000000',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#333333',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;