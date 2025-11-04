import { Telegram } from '@mui/icons-material';
import { Discord } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { Linkedin } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anton-karabach-696b2236b/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/eatsky1013',
      icon: GitHub,
    },
    { icon: Telegram, href: 'https://t.me/eat', label: 'Telegram' },
    { icon: Discord, href: 'https://discord.gg/8Fg2yQtM', label: 'Discord' },
    { icon: WhatsApp, href: 'https://wa.me/380501604137', label: 'Whatsapp' },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          paddingTop: 6,
          paddingBottom: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 3
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with Kaden Borer on ${social.label}`}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
              sx={{
                color: 'white',
                transition: 'all 0.3s ease-in-out',
                transform: hoveredIcon === index ? 'translateY(-4px)' : 'translateY(0)',
                '&:hover': {
                  color: 'white'
                }
              }}
            >
              <social.icon size={20} />
            </IconButton>
          ))}
        </Box>

        <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Kaden Borer
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;