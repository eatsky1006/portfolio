import { Instagram } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { Linkedin, } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: GitHub, href: 'https://github.com/AhmadGill7', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/handsom.ware', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmadgill', label: 'LinkedIn' },
    { icon: WhatsApp, href: 'https://wa.me/923089900772', label: 'Whatsapp' },
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
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  color: 'white'
                }
              }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </IconButton>
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            opacity: 0.7,
            maxWidth: '600px',
            lineHeight: 1.8
          }}
        >
          Built with Vite and MUI, deployed with Netlify by yours truly.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Ahmad Gill
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;