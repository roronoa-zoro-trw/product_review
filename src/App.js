import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ProductReview from './components/ProductReview';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#64748b',
    },
    background: {
      default: '#f8fafc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 24px',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: '#2563eb',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <ProductReview />
      </Container>
    </ThemeProvider>
  );
}

export default App;
