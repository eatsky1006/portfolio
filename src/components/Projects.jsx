import { Box, Typography, Container, Grid, Link, } from '@mui/material';
import PopitLogo from "../assets/PopitLogoImage.png";
import PerkSwapLogo from "../assets/PerkSwapLogo.svg";
import CroCreateLogo from "../assets/CroCreate Full Rez.png";
import { useMemo } from 'react';

const Projects = () => {

  const projects = useMemo(() => [
    {
      title: 'Popit Game',
      description: 'innovative blockchain-integrated game where users bet cryptocurrency to participate in real-time game-play.',
      logo: PopitLogo,
      url: 'https://dev.popit-game.top'
    },
    {
      title: 'PerkSwap',
      description: 'Cryptocurrency exchange platform offering streamlined buying/selling/swapping, mirroring major exchanges\' scale without traditional trading features',
      logo: PerkSwapLogo,
      url: 'https://perkswap.finance'
    },
    {
      title: 'Cro Create',
      description: 'Web3 platform on Cronos Chain offering tools for token creation, liquidity management, and airdrops, empowering decentralized community growth',
      logo: CroCreateLogo,
      url: 'https://crocreate.app'
    },
  ], []);

  return (
    <Container maxWidth="lg" id="projects">
      <Box
        sx={{
          paddingTop: 8,
          paddingBottom: 6,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3"
          align="center" sx={{ fontWeight: 'bold', fontFamily: 'Poppins', letterSpacing: '5px', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          PROJECTS
        </Typography>
        <Typography gutterBottom align="center" sx={{
          mb: 2, opacity: 0.7,
          background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          letterSpacing: '0.2em', fontSize: '14px'

        }}>
          EXPLORE NOW
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                textAlign: 'left',
              }}
            >
              {/* Logo on the left */}
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', }}
              >
                <Box
                  component="img"
                  loading='lazy'
                  src={project.logo}
                  alt={`${project.title} logo`}
                  sx={{
                    width: 150,
                    maxWidth: '100%',
                    minWidth: 150,
                    height: 100,
                    objectFit: 'contain',
                    borderRadius: '16px',
                    backgroundColor: 'white',
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.57)'
                  }}
                />
              </Link>
              {/* Text & Link on the right */}
              <Box>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: '#fff', fontWeight: 'bold',
                    fontSize: '1.1rem',
                    '&:hover': {
                      background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                    }
                  }}
                >
                  {project.title}
                </Link>
                <Typography variant="body2" sx={{ opacity: 0.7, color: '#ccc' }}>
                  {project.description}
                </Typography>
              </Box>

            </Grid>
          ))}
        </Grid>

      </Box>
    </Container>
  );
};

export default Projects;