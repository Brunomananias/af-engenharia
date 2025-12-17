// components/LandingPage.tsx
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Conheca from './Conheca/Conheca';
import Portfolio from './Portfolio/Portfolio';
import Clientes from './Clientes/Clientes';
import Privacidade from './Privacidade/Privacidade';
import Contato from './Contato/Contato';
import Footer from './Footer/Footer';

const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'conheca', 'portfolio', 'clientes', 'privacidade', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <Navbar activeSection={activeSection} />
      <Box component="main">
        <Box id="inicio">
          <Hero />
        </Box>
        <Box id="conheca">
          <Conheca />
        </Box>
        <Box id="portfolio">
          <Portfolio />
        </Box>
        <Box id="clientes">
          <Clientes />
        </Box>
        <Box id="privacidade">
          <Privacidade />
        </Box>
        <Box id="contato">
          <Contato />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;