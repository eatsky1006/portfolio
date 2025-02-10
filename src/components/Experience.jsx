import { Box, Typography, Container, Chip } from '@mui/material';

const technologiesCodixsol = ['React', 'Vite', "NEXT JS", 'NODE JS', 'Express', 'Web 2', 'Web 3', 'Wagmi/Reown', 'Viem', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'MUI', 'Socket.io', 'MySql', 'PostgreSql', 'MongoDb', 'Cloud Panel',];
const technologies = ['React', 'NODE JS', 'Express', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'MongoDb',];
const Experience = () => {

  return (
    <Container maxWidth="lg" id="experience" sx={{ px: { xs: 2, md: 0 } }}>
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          '&:not(:last-child)': {
            mb: 6
          },
          lineHeight: 1.6
        }}
      >
        <Typography variant="h3"
          align="center" sx={{
            fontWeight: 'bold',
            letterSpacing: '5px',
            fontFamily: 'Poppins',
            fontSize: { xs: '32px', sm: '40px', md: '47.42px' },
            lineHeight: { xs: 1.3, md: 1.2 }
          }}>
          EXPERIENCE
        </Typography>
        <Typography gutterBottom align="center" sx={{
          mb: 2, opacity: 0.7,
          background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          letterSpacing: '0.2em', fontSize: { xs: '12px', md: '14px' }
        }}>
          EXPLORE NOW
        </Typography>
        {/* Codix Sol */}
        <Box sx={{ maxWidth: '800px', py: { xs: 4, md: 0 }, mx: 'auto', px: { xs: 1, md: 0 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            mb: 4,

            gap: 1
          }}>
            <Box>
              <Typography variant="h5" sx={{
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: '0.875rem', md: '1.5rem' },
                lineHeight: 1.2
              }}>
                1. Codix Sol / <span style={{ opacity: 0.7, fontWeight: 'normal' }}>Web Developer</span>
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{
              opacity: 0.7,
              fontSize: { xs: '0.75rem', md: 'inherit' },
              mb: { xs: 1, md: 0 }
            }}>
              July 2024 - PRESENT
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, lineHeight: 1.6, textAlign: 'left' }}>
            As a Full-Stack Developer at CodixSol, I develop robust web solutions using the MERN stack. Optimized enterprise application performance through modular architecture and reusable components, improving codebase efficiency. Delivered scalable solutions meeting strict deadlines while solving complex technical challenges.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, lineHeight: 1.6, textAlign: 'left' }}>
            Mentored junior developers in modern practices through knowledge-sharing initiatives. Led adoption of best practices for maintainable React/Node.js systems. Expertise includes REST APIs, secure authentication flows, and responsive UI design aligned with UX principles. Focused on delivering clean, maintainable code.
          </Typography>

          <Box sx={{
            display: 'flex',
            gap: { xs: 0.5, md: 1 },
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}>
            {technologiesCodixsol.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  padding: { xs: '3px', md: '5px' },
                  color: '#E1E1E1',
                  borderRadius: '16px',
                  backgroundColor: '#000000',
                  border: '3px solid transparent',
                  backgroundClip: 'padding-box',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '16px',
                    padding: { xs: '3px', md: '5px' },
                    background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
                    zIndex: -1,
                  },
                }}
              />
            ))}
          </Box>
        </Box>
        {/* Gamica Cloud */}
        <Box sx={{ maxWidth: '800px', py: { xs: 4, md: 0 }, mx: 'auto', px: { xs: 1, md: 0 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            mb: 4,

            gap: 1
          }}>
            <Box>
              <Typography variant="h5" sx={{
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: '0.875rem', md: '1.5rem' },
                lineHeight: 1.2
              }}>
                2.   Gamica Cloud / <span style={{ opacity: 0.7, fontWeight: 'normal' }}> Web Developer</span>
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{
              opacity: 0.7,
              fontSize: { xs: '0.75rem', md: 'inherit' },
              mb: { xs: 1, md: 0 }
            }}>
              February 2024 - July 2024
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, lineHeight: 1.6, textAlign: 'left' }}>
              During my 6-month MERN stack internship at Gamica Cloud, I developed 5+ full-stack applications using React, Node.js, Express, and MongoDB, while collaborating with a team of developers to optimize workflows and reduce project delivery timelines by 15%.
              <br />

              I enhanced application performance by 20% through strategic debugging and code refinement, and accelerated load speeds for critical deliverables.
              <br />
              <br />
              Under expert mentorship, I rapidly mastered HTML, CSS, JavaScript, and React, building scalable frontend and full-stack projects from scratch with a focus on clean architecture, database integration, and industry best practices.
            </Typography>

            <Box sx={{
              display: 'flex',
              gap: { xs: 0.5, md: 1 },
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    padding: { xs: '3px', md: '5px' },
                    color: '#E1E1E1',
                    borderRadius: '16px',
                    backgroundColor: '#000000',
                    border: '3px solid transparent',
                    backgroundClip: 'padding-box',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '16px',
                      padding: { xs: '10px', md: '15px' },
                      background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
                      zIndex: -1,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box >
    </Container >
  );
};

export default Experience;