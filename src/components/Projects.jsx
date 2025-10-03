import { Box, Typography, Container, Grid, Link, } from '@mui/material';
import PopitLogo from "../assets/PopitLogoImage.png";
import KaspaFinanceLogo from "../assets/KF_05.png";
import kyloLogo from "../assets/kyloLogo.png";
import pankitoLogo from "../assets/pankitoLogo.png";
import moodaiLogo from "../assets/moodaiLogo.png";
import publicmintLogo from "../assets/publicmintLogo.png";
import yldlogo from "../assets/yldlogo.png"; 
import Magmarlogo from "../assets/Magmarlogo.png";
import CroCreateLogo from "../assets/CroCreate Full Rez.png";
import Auctuslogo from "../assets/Auctuslogo.png";
import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = useMemo(() => [
    {
      title: 'Kaspa Finance',
      description: 'Designed and developed Kaspa Finance, an end-to-end DeFi super-app on Kaspa’s EVM L2, enabling users to swap, stake, farm, and earn rewards through a unified platform',
      logo: KaspaFinanceLogo,
      url: 'https://app.kaspafinance.io'
    },
    {
      title: 'Near network',
      description: 'NEAR is a carbon-neutral, high-performance blockchain platform designed for scalability, user-friendly decentralized applications, and interoperability across Web3 ecosystems. It empowers developers and communities with fast, low-cost transactions and a robust infrastructure for building decentralized apps, DAOs, and digital economies.',
      logo: nearlogo,
      url: 'https://www.near.org/'
    },
    // {
    //   title: 'PerkSwap',
    //   description: 'Cryptocurrency exchange platform offering streamlined buying/selling/swapping, mirroring major exchanges\' scale without traditional trading features',
    //   logo: PerkSwapLogo,
    //   url: 'https://perkswap.finance'
    // },
    {
      title: 'Cro Create',
      description: 'Web3 platform on Cronos Chain offering tools for token creation, liquidity management, and airdrops, empowering decentralized community growth',
      logo: CroCreateLogo,
      url: 'https://crocreate.app'
    },
    {
      title: 'kylothedoge',
      description: 'KyloTheDoge is a funny crypto coin with a dog character named Kylo. It’s about memes, fun, and community.',
      logo: kyloLogo,
      url: 'https://www.kylothedoge.dog'
    },
    {
      title: 'pankito',
      description: 'Pankito is a blockchain-based metaverse game that lets users play, mine rewards, and explore digital characters and lands, with a focus on sustainability and upcoming land launches.',
      logo: pankitoLogo,
      url: 'https://pankito.com/'
    },
    {
      title: 'mood',
      description: 'Mood.ai is a platform that uses AI to help users create custom logo designs.',
      logo: moodaiLogo,
      url: 'https://www.mood.ai'
    },
    {
      title: 'publicmint',
      description: 'Web3 platform on Cronos Chain offering tools for token creation, liquidity management, and airdrops, empowering decentralized community growth',
      logo: publicmintLogo,
      url: 'https://publicmint.com/'
    },
    {
      title: 'yld',
      description: 'YLD.fun is a platform that offers fun crypto-related tools, rewards, and experiences for the Web3 community.',
      logo: yldlogo,
      url: 'https://yld.fun/'
    },
    {
      title: 'Magmar',
      description: 'Magmar Infra is an infrastructure and construction company specializing in engineering, procurement, and project management services.',
      logo: Magmarlogo,
      url: 'https://www.magmarinfra.com'
    },
    {
      title: 'Auctus',
      description: 'Auctus.org is a decentralized investment platform that helps users create and manage diversified portfolios using blockchain technology.',
      logo: Auctuslogo,
      url: 'https://auctus.org'
    },
  ], []);

  return (
    <>
      <Helmet>
        <title>Karabach Anton - Full-Stack & Blockchain Developer</title>
        <meta name="description" content="Explore Karabach Anton's blockchain and web development projects including Popit Game, PerkSwap, and Cro Create - showcasing expertise in DeFi, smart contracts, and Web3 technologies." />
      </Helmet>
      <Container maxWidth="lg" id="projects">
        <Box
          sx={{
            paddingTop: { xs: 3, md: 6 },
            paddingBottom: { xs: 4, md: 6 },
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
              fontFamily: 'Playfair Display', letterSpacing: '3px',
              fontSize: { xs: '2rem', md: '3.5rem' },
              mb: { xs: 1, md: 3 }
            }}>
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
                sm={12}
                md={6}
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  maxWidth: '600px',
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                {/* Logo on the left */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  aria-label={`Visit ${project.title} website`}
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    transition: 'transform 0.3s ease',
                    display: 'block'
                  }}
                >
                  <Box
                    component="img"
                    loading='lazy'
                    src={project.logo}
                    alt={`${project.title} - Web3 Project by Karabach Anton`}
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
                      boxShadow: hoveredProject === index
                        ? '0px 6px 25px rgba(255, 255, 255, 0.67)'
                        : '0px 4px 20px rgba(255, 255, 255, 0.57)',
                      transform: hoveredProject === index ? 'translateY(-5px)' : 'translateY(0)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
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
                      transition: 'background-position 0.3s ease',
                      background: hoveredProject === index
                        ? 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)'
                        : 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%) right',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundSize: '200% auto',
                      display: 'inline-block'
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
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
    </>
  );
};

export default Projects;