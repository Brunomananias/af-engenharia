// components/Hero/Hero.tsx
import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className={styles.heroSection}>
      <Box className={styles.heroOverlay}>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            {/* APENAS A FRASE - ALINHADA À DIREITA */}
            <Typography 
              variant={isMobile ? 'h5' : 'h3'} 
              className={styles.commitmentText}
              sx={{ 
                textAlign: 'right',
                maxWidth: { xs: '100%', md: '70%' },
                ml: 'auto',
                fontWeight: 700,
                color: 'white',
                textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
                pt: { xs: 4, md: 8 }
              }}
            >
              Nosso compromisso é entregar serviços de engenharia com excelência e inovação.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;