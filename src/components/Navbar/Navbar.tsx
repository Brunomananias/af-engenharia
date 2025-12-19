// components/Navbar/Navbar.tsx - CORRIGIDO
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Container, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton, // ✅ Importe ListItemButton
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Navbar.module.css';

// Importe sua logo
import logo from '/assets/imagens/logos/logoempresa.png';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'conheca', label: 'Conheça' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'clientes', label: 'Clientes' },
    { id: 'privacidade', label: 'Privacidade' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  // Drawer para mobile - CORRIGIDO
  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#003366', height: '100%', color: 'white' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Box className={styles.navbarBrand}>
          {logo ? (
            <img 
              src={logo} 
              alt="AF Engenharia" 
              className={styles.logoImage}
              onClick={() => handleNavClick('inicio')}
              style={{ 
                cursor: 'pointer', 
                height: '70px', // ← Aumente aqui
                width: 'auto', // Mantém proporção
                maxHeight: '100%' // Não ultrapassa o container
              }}
            />
          ) : (
            <>
              <Box component="span" className={styles.brandText}>AF Engenharia</Box>
              <Box component="span" className={styles.brandSubtitle}>& Construtora</Box>
            </>
          )}
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.id} 
            disablePadding // ✅ Adicione disablePadding
            sx={{
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {/* ✅ Use ListItemButton em vez de button prop */}
            <ListItemButton 
              onClick={() => handleNavClick(item.id)}
              sx={{
                bgcolor: activeSection === item.id ? 'rgba(0, 168, 89, 0.2)' : 'transparent',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
                py: 1.5,
                px: 2
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: activeSection === item.id ? '#00A859' : 'white',
                    fontWeight: activeSection === item.id ? 600 : 400,
                    fontSize: '1rem'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3, mt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" className={styles.navbar}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo/Brand */}
            <Box className={styles.navbarBrand} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {logo ? (
                <img 
                  src={logo} 
                  alt="AF Engenharia" 
                  className={styles.logoImage}
                  onClick={() => handleNavClick('inicio')}
                  style={{ cursor: 'pointer', height: '50px', width: 'auto' }}
                />
              ) : (
                <Box 
                  sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                  onClick={() => handleNavClick('inicio')}
                >
                  <Box component="span" className={styles.brandText}>AF Engenharia</Box>
                  <Box component="span" className={styles.brandSubtitle}>& Construtora</Box>
                </Box>
              )}
            </Box>
            
            {/* Menu Desktop */}
            {!isMobile ? (
              <Box className={styles.navbarMenu}>
                {navItems.map(item => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            ) : (
              // Menu Mobile (Hamburger)
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={styles.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            bgcolor: '#003366'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;