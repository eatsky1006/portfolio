/* eslint-disable react/prop-types */
import { Box, Typography, Container, Chip } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const technologiesNetixSol = ['React', 'NEXT JS', 'NODE JS', 'Express', 'Web3', 'Blockchain', 'Smart Contracts', 'Solidity', 'Rust', 'Remix', 'DeFi', 'Viem','Wagmi / Reown', 'Web3.js', 'JavaScript', 'Tailwind', 'MUI', 'MongoDB', 'PostgreSQL', 'Rust', 'EVM', 'Ethers.js', 'Solana', 'Remix', 'Truﬄe', 'Hardhat', 'Layer 2', 'NFT', 'DApps', 'Bitcoin', 'Tezos', 'Stellar', 'Polkadot'];
const technologiesCodixsol = ['React', 'Vite', "NEXT JS", 'NODE JS', 'Express', 'Web 2', 'Web 3', 'Wagmi/Reown', 'Viem', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'MUI', 'Socket.io', 'MySql', 'PostgreSql', 'MongoDb', 'Cloud Panel', 'Solidity', 'Rust', 'EVM', 'Ethers.js', 'Solana', 'Remix', 'Truﬄe', 'Hardhat', 'Layer 2', 'NFT'];
const technologiesGamicaCloud = ['React', 'Vite', "NEXT JS", 'NODE JS', 'Express', 'Web 2', 'Web 3', 'Wagmi/Reown', 'Viem', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'MUI', 'Socket.io', 'MySql', 'PostgreSql', 'MongoDb', 'Cloud Panel'];


// Create a reusable Chip style function
const gradientChipStyle = (padding) => ({
  fontSize: { xs: '0.75rem', md: '0.875rem' },
  padding: { xs: '3px', md: '5px' },
  color: '#E1E1E1',
  borderRadius: '16px',
  backgroundColor: '#000000',
  border: '3px solid transparent',
  backgroundClip: 'padding-box',
  position: 'relative',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '16px',
    padding: padding,
    background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
    zIndex: -1,
  },
});

const Experience = () => {
  // Reusable Experience Entry Component
  const ExperienceEntry = ({  title, subtitle, date, description, technologies }) => (
    <Box
      sx={{
        maxWidth: '800px',
        py: { xs: 4, md: 0 },
        mx: 'auto',
        px: { xs: 1, md: 0 },
        marginTop: { xs: 4, md: 4 },
        transition: 'transform 0.3s ease',
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        mb: 4,
        gap: 1
      }}>
        <Typography variant="h5" sx={{
          fontWeight: 'bold',
          mb: 1,
          fontSize: { xs: '0.875rem', md: '1.5rem' },
          lineHeight: 1.2
        }}>
          {title} / <span style={{ opacity: 0.7, fontWeight: 'normal' }}>{subtitle}</span>
        </Typography>
        <Typography variant="subtitle2" sx={{
          opacity: 0.7,
          fontSize: { xs: '0.75rem', md: 'inherit' },
          mb: { xs: 1, md: 0 }
        }}>
          {date}
        </Typography>
      </Box>

      {description.map((text, index) => (
        <Typography key={index} variant="body1" sx={{ mb: 4, opacity: 0.8, lineHeight: 1.6, textAlign: 'left' }}>
          {text}
        </Typography>
      ))}

      <Box sx={{
        display: 'flex',
        gap: { xs: 0.5, md: 1 },
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'flex-start' }
      }}>
        {technologies.map((tech) => (
          <Chip key={tech} label={tech} sx={gradientChipStyle({ xs: '3px', md: '5px' })} />
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>Kaden Borer - Full-Stack & Blockchain Developer</title>
        <meta name="description" content="Kaden Borer's professional journey as a Full-Stack and Web3 Developer, with experience at NetixSol, Codix Sol and Gamica Cloud working on React, Node.js, and blockchain technologies." />
      </Helmet>
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
              letterSpacing: '3px',
              fontFamily: 'Playfair Display',
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

          {/* NetixSol */}
          <ExperienceEntry
            id="netixsol"
            title="1. Freelancer"
            subtitle="Associate Software Engineer"
            date="May 2025 - PRESENT"
            description={[
              'As an Associate Software Engineer, I develop and maintain Web3 and blockchain applications with a focus on DeFi protocols and smart contract integrations. Working with modern frameworks like React, Next.js, and Node.js to create seamless user experiences for decentralized applications.',
              'Collaborating closely with blockchain architects to implement complex smart contract functionality and ensure secure, efficient interactions between frontend interfaces and on-chain logic. Contributing to the full development lifecycle from concept to deployment while maintaining scalable MERN stack applications.'
            ]}
            technologies={technologiesNetixSol}
          />

          {/* Codix Sol */}
          <ExperienceEntry
            id="codixsol"
            title="2.  Ciklum"
            subtitle="Blockchain Developer"
            date="April 2021 - May 2025"
            description={[
              '• Smart Contract Development: Developed, tested, and deployed secure smart contracts for various use cases, automating business processes and reducing reliance on intermediaries.',
              '• Coin/Token Development: Led end-to-end development of cryptocurrencies, ensuring they were secure, compliant, and compatible with existing blockchain ecosystems.',
              '• Crypto Wallet Development: Engineered secure cryptocurrency wallets with advanced features like multi-signature support and biometric authentication, enhancing user trust and accessibility.',
              '• DEX Development: Developed decentralized (DEX) and centralized (CEX) exchange platforms featuring advanced trading functionalities, high liquidity, and cutting-edge security measures.',
              '• DeFi Development: Designed and implemented decentralized finance (DeFi) applications, enabling functionalities such as lending, borrowing, staking, and yield farming.',
              '• Website: https://ilink.dev/'
            ]}
            technologies={technologiesCodixsol}
          />

          {/* Gamica Cloud */}
          <ExperienceEntry
            id="gamicacloud"
            title="3.  SoftServe "
            subtitle="Full-Stack Developer"
            date="August 2018 - April 2021"
            description={[
              '• Spearheaded the creation of scalable web applications using cutting-edge JavaScript frameworks like React, and Next.js, ensuring a seamless and dynamic user experience.',
              '• Designed and applied robust RESTful APIs and microservices with Node.js and Express.js, driving performance and scalability.',
              '• Optimized front-end performance and ensured cross-device compatibility using HTML5, CSS3, and Bootstrap.',
              '• Managed cloud infrastructure and CI/CD pipelines with AWS, and Docker, enhancing deployment efficiency and system reliability.',
              '• Administered MongoDB, PostgreSQL, and MySQL databases, focusing on data integrity and high availability.',
              '• Conducted code reviews and provided mentorship to junior developers, fostering a collaborative and innovative team environment.',
              '• Worked closely with UX/UI designers and product managers to deliver user-centric solutions that align with business goals',
              '• Website: https://tekmates.pro/'
            ]}
            technologies={technologiesGamicaCloud}
          />
        </Box >
      </Container >
    </>
  );
};

export default Experience;