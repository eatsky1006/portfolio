import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#121212',
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#585858',
    },
  },
  typography: {
    fontFamily: [
      'Roboto', 
      'Poppins',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          border: '1px solid #585858',
        },
      },
    },
  },
});

