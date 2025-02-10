import BackgroundPattern from './assets/Background Pattern.png'
import { Box, Container } from "@mui/material"
import Navbar from './components/Navbar'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Hero from './components/Hero';
import { lazy } from 'react';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const AboutComponent = lazy(() => import('./components/About'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <img style={{ position: 'absolute', right: '0', top: '0', zIndex: '0' }} src={BackgroundPattern} alt="BackgroundPattern" />
        <Box sx={{ position: 'relative', zIndex: '1', width: '100%', height: '100vh', }}>
          <Navbar />
          <Hero onContactClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }} />
          <AboutComponent />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
