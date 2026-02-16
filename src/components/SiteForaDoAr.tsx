/* eslint-disable @typescript-eslint/no-unused-vars */
// components/SiteForaDoAr.tsx
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Button,
  Stack,
  Divider,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const SiteForaDoAr: React.FC = () => {
  const contactInfo = {
    email: 'contato@empresa.com',
    phone: '(11) 99999-9999',
    developerEmail: 'brunomananias2009@hotmail.com',
    developerPhone: '(31) 97501-1732'
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        p: 2
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'linear-gradient(90deg, #ff6b6b 0%, #ff8e53 100%)'
            }
          }}
        >
          {/* Ícone de alerta */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                backgroundColor: 'error.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'pulse 2s infinite'
              }}
            >
              <ErrorOutlineIcon
                sx={{
                  fontSize: 60,
                  color: 'error.main'
                }}
              />
            </Box>
          </Box>

          {/* Título principal */}
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'error.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            SITE TEMPORARIAMENTE FORA DO AR
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            <WarningAmberIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Serviço suspenso por falta de pagamento
          </Typography>

          {/* Mensagem principal */}
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 5,
              color: 'text.primary'
            }}
          >
            Nosso site está temporariamente indisponível devido à falta de pagamento 
            dos serviços de hospedagem e domínio. Para restabelecer o acesso ao site, 
            entre em contato imediatamente com o responsável pela manutenção.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* Seção de contato */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                mb: 3
              }}
            >
              Entre em Contato Para Regularizar
            </Typography>

            {/* Informações do desenvolvedor */}
            <Paper
              variant="outlined"
              sx={{
                p: 3,
                mt: 3,
                borderRadius: 2,
                borderColor: 'warning.main',
                backgroundColor: 'warning.10'
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: 'warning.dark',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                <WarningAmberIcon />
                Desenvolvedor do Site
              </Typography>
              <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                Caso tenha dificuldades, entre em contato via whatsapp com o desenvolvedor:
              </Typography>
              
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="outlined"
                  color="warning"
                  startIcon={<PhoneIcon />}
                  href={`tel:${contactInfo.developerPhone}`}
                >
                  {contactInfo.developerPhone}
                </Button>
              </Stack>
            </Paper>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Instruções */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: 'success.main',
                mb: 3
              }}
            >
              Procedimentos Para Regularização
            </Typography>
            
            <Stack spacing={2} alignItems="flex-start" sx={{ maxWidth: 600, mx: 'auto' }}>
              {[
                'Entre em contato com um dos números ou e-mails acima',
                'Informe que deseja regularizar o pagamento do site',
                'Siga as instruções para efetuar o pagamento',
                'O site será reativado em até 24h após a confirmação do pagamento'
              ].map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    textAlign: 'left'
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 30,
                      height: 30,
                      borderRadius: '50%',
                      backgroundColor: 'success.light',
                      color: 'success.contrastText',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      mt: 0.5,
                      fontWeight: 'bold'
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="body1">{step}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Botão de tentar novamente (opcional) */}
          <Box sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => window.location.reload()}
              sx={{ mr: 2 }}
            >
              Tentar Carregar o Site Novamente
            </Button>
          </Box>

          {/* Rodapé */}
          <Box sx={{ mt: 5, pt: 3, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="caption" color="text.secondary">
              Esta é uma página temporária de manutenção. 
              O site será restabelecido assim que o pagamento for confirmado.
            </Typography>
          </Box>
        </Paper>
      </Container>

      {/* Estilos de animação */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export default SiteForaDoAr;