// components/Footer/Footer.tsx
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  Stack, 
  IconButton,
  Divider,
} from '@mui/material';
import { 
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookIcon />, url: '#', label: 'Facebook' },
    { icon: <InstagramIcon />, url: '#', label: 'Instagram' },
    { icon: <LinkedInIcon />, url: '#', label: 'LinkedIn' },
    { icon: <YouTubeIcon />, url: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Conheça', href: '#conheca' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Privacidade', href: '#privacidade' },
    { label: 'Contato', href: '#contato' },
  ];

  const servicesLinks = [
    { label: 'Construções Civis', href: '#portfolio' },
    { label: 'Infraestrutura', href: '#portfolio' },
    { label: 'Saneamento Básico', href: '#portfolio' },
    { label: 'Locações', href: '#portfolio' },
    { label: 'Reformas', href: '#portfolio' },
    { label: 'Laudos Técnicos', href: '#portfolio' },
  ];

  return (
    <Box className={styles.footer}>
      <Container maxWidth="lg">
        {/* Seção principal do footer */}
        <Box className={styles.footerContent}>
          {/* Logo e descrição */}
          <Box className={styles.footerSection}>
            <Box className={styles.footerLogo}>
              <Typography variant="h4" fontWeight="bold" color="white">
                AF Engenharia
              </Typography>
              <Typography variant="subtitle1" color="secondary.main">
                & Construtora
              </Typography>
            </Box>
            <Typography variant="body2" className={styles.footerDescription} paragraph>
              Excelência em engenharia civil, com foco em obras de saneamento e de infraestrutura essenciais
            </Typography>
            
            {/* Redes sociais */}
            <Box className={styles.socialLinks}>
              <Typography variant="subtitle2" color="white" gutterBottom>
                Siga-nos:
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    className={styles.socialIcon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Links rápidos */}
          <Box className={styles.footerSection}>
            <Typography variant="h6" className={styles.footerSectionTitle}>
              Links Rápidos
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={styles.footerLink}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Serviços */}
          <Box className={styles.footerSection}>
            <Typography variant="h6" className={styles.footerSectionTitle}>
              Nossos Serviços
            </Typography>
            <Stack spacing={1}>
              {servicesLinks.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={styles.footerLink}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(service.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {service.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Contato */}
          <Box className={styles.footerSection}>
            <Typography variant="h6" className={styles.footerSectionTitle}>
              Contato
            </Typography>
            <Stack spacing={2}>
              <Box className={styles.contactItem}>
                <LocationIcon className={styles.contactIcon} />
                <Box>
                  <Typography variant="body2" color="white" fontWeight="500">
                    Endereço
                  </Typography>
                  <Typography variant="body2" className={styles.contactText}>
                    Rua José Feliciano Vilela, 102, 
                    Centro, Coqueiral/MG<br />
                    CEP: 37235-000
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactItem}>
                <PhoneIcon className={styles.contactIcon} />
                <Box>
                  <Typography variant="body2" color="white" fontWeight="500">
                    Telefone
                  </Typography>
                  <Typography variant="body2" className={styles.contactText}>
                    (31) 99331-5730
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactItem}>
                <EmailIcon className={styles.contactIcon} />
                <Box>
                  <Typography variant="body2" color="white" fontWeight="500">
                    E-mail
                  </Typography>
                  <Typography variant="body2" className={styles.contactText}>
                    rh@af-engenharia.com
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Divider className={styles.footerDivider} />

        {/* Rodapé inferior */}
        <Box className={styles.footerBottom}>
          <Typography variant="body2" className={styles.copyright}>
            &copy; {currentYear} AF Engenharia & Construtora. Todos os direitos reservados.
          </Typography>
          <Typography variant="caption" className={styles.cnpj}>
            CNPJ: 36.339.407/0001-95
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;