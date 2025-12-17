// components/Hero/Hero.tsx
import React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className={styles.heroSection}>
      <Box className={styles.heroOverlay}>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography 
              variant={isMobile ? 'h3' : 'h1'} 
              className={styles.heroTitle}
              sx={{ 
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Excelência em <Box component="span" className={styles.highlight}>Engenharia</Box> e{' '}
              <Box component="span" className={styles.highlight}>Construção</Box>
            </Typography>
            <Typography 
              variant="h6" 
              className={styles.heroSubtitle}
              sx={{ 
                mb: 4,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Soluções inovadoras e sustentáveis para o desenvolvimento urbano e rural desde 2020
            </Typography>
            <Box className={styles.heroButtons}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{ 
                  mr: 2, 
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}
              >
                Ver Portfólio
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{ 
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Solicitar Orçamento
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      
      <Container maxWidth="lg">
        <Box className={styles.heroStats}>
          {[
            { value: '5+', label: 'Anos de Experiência' },
            { value: '50+', label: 'Projetos Concluídos' },
            { value: '10+', label: 'Cidades Atendidas' },
            { value: '100%', label: 'Compromisso com a Qualidade' },
          ].map((stat, index) => (
            <Box key={index} className={styles.statItem}>
              <Typography 
                variant="h3" 
                color="secondary" 
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
              >
                {stat.value}
              </Typography>
              <Typography 
                variant="body2" 
                color="white"
                sx={{ 
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  opacity: 0.9
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;