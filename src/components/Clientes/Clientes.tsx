// components/Clientes/Clientes.tsx
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  useTheme,
  useMediaQuery 
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Clientes.module.css';

// Importar as imagens
import logo1 from '../../assets/imagens/logos/logo1.jpg';
import logo2 from '../../assets/imagens/logos/logo2.jpg';
import logo3 from '../../assets/imagens/logos/logo3.jpg';
import logo4 from '../../assets/imagens/logos/logo4.jpg';
import logo5 from '../../assets/imagens/logos/logo5.jpg';
import logo6 from '../../assets/imagens/logos/logo6.jpg';
import logo7 from '../../assets/imagens/logos/logo7.jpg';
import logo8 from '../../assets/imagens/logos/logo8.jpg';
import logo9 from '../../assets/imagens/logos/logo9.jpg';
import logo10 from '../../assets/imagens/logos/logo10.jpg';
import logo11 from '../../assets/imagens/logos/logo11.jpg';

const Clientes: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeSlide, setActiveSlide] = useState(0);

  // Array de imagens importadas
  const logos = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10, logo11
  ];

  // Informações dos clientes (correspondendo às imagens)
  const clients = [
    { 
      name: "Prefeitura de Mariana", 
      image: logos[0],
      description: "Município de Mariana - MG" 
    },
    { 
      name: "Prefeitura de Salinas", 
      image: logos[1],
      description: "Município de Salinas - MG" 
    },
    { 
      name: "Prefeitura de Peçanha", 
      image: logos[2],
      description: "Município de Peçanha - MG" 
    },
    { 
      name: "Prefeitura de Rio Paranaíba", 
      image: logos[3],
      description: "Município de Rio Paranaíba - MG" 
    },
    { 
      name: "Prefeitura de Catas Altas", 
      image: logos[4],
      description: "Município de Catas Altas - MG" 
    },
    { 
      name: "Prefeitura de Itabira", 
      image: logos[5],
      description: "Município de Itabira - MG" 
    },
    { 
      name: "Prefeitura de Bambuí", 
      image: logos[6],
      description: "Município de Bambuí - MG" 
    },
    { 
      name: "Prefeitura de Formiga", 
      image: logos[7],
      description: "Município de Formiga - MG" 
    },
    { 
      name: "Prefeitura de Manga", 
      image: logos[8],
      description: "Município de Manga - MG" 
    },
    { 
      name: "Águas de Sinop (AEGEA)", 
      image: logos[9],
      description: "Concessionária de Água - Sinop/MT" 
    },
    { 
      name: "Hemobrás", 
      image: logos[10],
      description: "Hemoderivados - Goiana/PE" 
    }
  ];

  const testimonials = [
    {
      text: "A AF Engenharia demonstrou profissionalismo excepcional na execução das obras de saneamento em nosso município, sempre cumprindo prazos e mantendo os mais altos padrões de qualidade.",
      author: "Prefeitura Municipal de Mariana",
      role: "Cliente"
    },
    {
      text: "Trabalhamos com a AF Engenharia em múltiplos projetos de infraestrutura. Sua abordagem focada em segurança e sustentabilidade é um diferencial no mercado.",
      author: "Águas de Sinop S.A.",
      role: "Parceira"
    },
    {
      text: "Excelente qualidade na execução das obras de tratamento de esgoto. Comprometimento total com prazos e especificações técnicas.",
      author: "Prefeitura Municipal de Salinas",
      role: "Cliente"
    }
  ];

  // Configurações do carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: isMobile ? 2 : 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Configurações do carousel de depoimentos
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Box className={styles.clientesSection}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom className="section-title">
          Nossos Clientes e Parceiros
        </Typography>
        
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Confiança e parceria com instituições públicas e privadas
        </Typography>
        
        {/* Carousel de Logos */}
        <Box className={styles.carouselContainer}>
          <Slider 
            {...carouselSettings} 
            className={styles.clientsCarousel}
            initialSlide={activeSlide}
          >
            {clients.map((client, index) => (
              <Box key={index} className={styles.clientLogoItem}>
                <Paper className={styles.clientLogo} elevation={3}>
                  <Box className={styles.logoImageContainer}>
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className={styles.logoImage}
                      loading="lazy"
                    />
                  </Box>
                  <Typography 
                    variant="subtitle1" 
                    align="center"
                    fontWeight="600"
                    className={styles.clientName}
                  >
                    {client.name}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    align="center"
                    color="text.secondary"
                    className={styles.clientDescription}
                  >
                    {client.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Slider>
        </Box>
        {/* Estatísticas */}
        <Box className={styles.statsContainer}>
          <Paper className={styles.statCard} elevation={2}>
            <Typography variant="h3" color="primary" fontWeight="bold" className={styles.statValue}>
              {clients.length}+
            </Typography>
            <Typography variant="body2" color="text.secondary" className={styles.statLabel}>
              Clientes Atendidos
            </Typography>
          </Paper>
          <Paper className={styles.statCard} elevation={2}>
            <Typography variant="h3" color="primary" fontWeight="bold" className={styles.statValue}>
              95%
            </Typography>
            <Typography variant="body2" color="text.secondary" className={styles.statLabel}>
              Satisfação do Cliente
            </Typography>
          </Paper>
          <Paper className={styles.statCard} elevation={2}>
            <Typography variant="h3" color="primary" fontWeight="bold" className={styles.statValue}>
              100%
            </Typography>
            <Typography variant="body2" color="text.secondary" className={styles.statLabel}>
              Recontratação
            </Typography>
          </Paper>
        </Box>
        
        {/* Depoimentos */}
        <Box className={styles.testimonialsSection}>
          <Typography variant="h4" align="center" gutterBottom className={styles.testimonialsTitle}>
            O que dizem sobre nós
          </Typography>
          
          <Box className={styles.testimonialsContainer}>
            <Slider {...testimonialSettings} className={styles.testimonialsCarousel}>
              {testimonials.map((testimonial, index) => (
                <Box key={index} className={styles.testimonialItem}>
                  <Paper className={styles.testimonialCard} elevation={3}>
                    <Box className={styles.quoteIcon}>
                      "
                    </Box>
                    <Typography 
                      variant="body1" 
                      className={styles.testimonialText}
                    >
                      {testimonial.text}
                    </Typography>
                    <Box className={styles.testimonialAuthor}>
                      <Box className={styles.authorInfo}>
                        <Typography variant="subtitle1" fontWeight="600" className={styles.authorName}>
                          {testimonial.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className={styles.authorRole}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Clientes;