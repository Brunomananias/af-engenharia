/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Contato/Contato.tsx
import React, { useState, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Alert,
  Snackbar,
  Divider,
  CircularProgress
} from '@mui/material';
import { 
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Send as SendIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import styles from './Contato.module.css';

const Contato: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  // ESTADOS DO FORMULÁRIO
  const [formData, setFormData] = useState({
    user_name: '',      // Nome específico para EmailJS
    user_email: '',     // Email específico para EmailJS
    user_phone: '',     // Telefone
    user_company: '',   // Empresa
    subject: '',        // Assunto
    message: ''         // Mensagem
  });
  
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔑 SUAS CREDENCIAIS DO EMAILJS (SUBSTITUA COM SEUS VALORES REAIS)
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_gj00sff',      // Vá em Email Services > Copie o Service ID
    TEMPLATE_ID: 'template_tmyqvtm',    // Vá em Email Templates > Copie o Template ID
    PUBLIC_KEY: '1GF-wbFZBvIoSR2db',      // Vá em Account > Copie a Public Key
    TARGET_EMAIL: 'brunomananias2009@hotmail.com' // Email que receberá as mensagens
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação dos campos obrigatórios
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setSnackbarMessage('Por favor, preencha todos os campos obrigatórios (*).');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      setSnackbarMessage('Por favor, insira um email válido.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setIsSubmitting(true);

    try {
      if (formRef.current) {
        // ENVIO VIA EMAILJS
        await emailjs.sendForm(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          formRef.current,
          EMAILJS_CONFIG.PUBLIC_KEY
        );

        // Sucesso
        setSnackbarMessage('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        
        // Limpar formulário
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          user_company: '',
          subject: '',
          message: ''
        });
      }
    } catch (error: any) {
      console.error('❌ Erro ao enviar email:', error);
      
      // Mensagens de erro específicas
      let errorMessage = 'Erro ao enviar mensagem. Tente novamente mais tarde.';
      
      if (error?.text) {
        if (error.text.includes('Invalid template ID')) {
          errorMessage = 'Erro de configuração: Template ID inválido. Verifique suas credenciais.';
        } else if (error.text.includes('Invalid service ID')) {
          errorMessage = 'Erro de configuração: Service ID inválido. Verifique suas credenciais.';
        } else if (error.text.includes('Invalid public key')) {
          errorMessage = 'Erro de configuração: Public Key inválida. Verifique suas credenciais.';
        }
      }
      
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'E-mail',
      content: 'rh@af-engenharia.com',
    },
    {
      icon: <LocationIcon />,
      title: 'Endereço',
      content: 'Rua José Feliciano Vilela, 102, nº442',
      subtitle: 'Centro, Coqueiral/MG - CEP: 37235-000'
    },
    {
      icon: <PersonIcon />,
      title: 'Sócio/Diretor',
      content: 'Alexandre Figueiredo Melquiades',
      subtitle: 'Engenheiro Civil/Sanitarista'
    }
  ];

  return (
    <Box className={styles.contatoSection}>
      <Container maxWidth="lg">
        {/* Cabeçalho */}
        <Box className={styles.headerContainer}>
          <Typography variant="h2" className={styles.mainTitle}>
            Entre em <Box component="span" className={styles.highlight}>Contato</Box>
          </Typography>
          <Typography variant="h6" className={styles.subtitle}>
            Estamos prontos para transformar suas ideias em realidade
          </Typography>
          <Divider className={styles.titleDivider} />
        </Box>

        <Box className={styles.contatoContent}>
          {/* Informações de Contato */}
          <Box className={styles.infoContainer}>
            <Typography variant="h4" className={styles.infoTitle}>
              Nossos Canais
            </Typography>
            <Box className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <Box key={index} className={styles.infoCard}>
                  <Box className={styles.infoIconContainer}>
                    <Box className={styles.infoIcon}>
                      {info.icon}
                    </Box>
                  </Box>
                  <Box className={styles.infoContent}>
                    <Typography variant="h6" className={styles.infoCardTitle}>
                      {info.title}
                    </Typography>
                    <Typography variant="body1" className={styles.infoCardText}>
                      {info.content}
                    </Typography>
                    <Typography variant="body2" className={styles.infoCardSubtitle}>
                      {info.subtitle}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Horário de Atendimento */}
            <Box className={styles.horarioContainer}>
              <Box className={styles.horarioHeader}>
                <ScheduleIcon className={styles.horarioIcon} />
                <Typography variant="h6" className={styles.horarioTitle}>
                  Horário de Atendimento
                </Typography>
              </Box>
              <Box className={styles.horarioContent}>
                <Box className={styles.horarioItem}>
                  <Typography variant="body1" className={styles.horarioLabel}>
                    Segunda a Sexta:
                  </Typography>
                  <Typography variant="body1" className={styles.horarioValue}>
                    8:00 às 18:00
                  </Typography>
                </Box>
                <Box className={styles.horarioItem}>
                  <Typography variant="body1" className={styles.horarioLabel}>
                    Sábado:
                  </Typography>
                  <Typography variant="body1" className={styles.horarioValue}>
                    8:00 às 12:00 (apenas emergências)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Formulário de Contato */}
          <Box className={styles.formContainer}>
            <Box className={styles.formHeader}>
              <Typography variant="h4" className={styles.formTitle}>
                Envie sua mensagem
              </Typography>
              <Typography variant="body1" className={styles.formSubtitle}>
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </Typography>
            </Box>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              {/* Campo Oculto para Email de Destino */}
              <input 
                type="hidden" 
                name="to_email" 
                value={EMAILJS_CONFIG.TARGET_EMAIL}
              />
              
              {/* Linha 1 - Nome e Empresa */}
              <Box className={styles.formRow}>
                <Box className={styles.formField}>
                  <Typography variant="body1" className={styles.fieldLabel}>
                    Nome Completo *
                  </Typography>
                  <TextField
                    fullWidth
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    size="medium"
                    placeholder="Digite seu nome completo"
                    disabled={isSubmitting}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#00A859'
                        }
                      }
                    }}
                  />
                </Box>
                <Box className={styles.formField}>
                  <Typography variant="body1" className={styles.fieldLabel}>
                    Empresa
                  </Typography>
                  <TextField
                    fullWidth
                    name="user_company"
                    value={formData.user_company}
                    onChange={handleChange}
                    variant="outlined"
                    size="medium"
                    placeholder="Nome da sua empresa"
                    disabled={isSubmitting}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px'
                      }
                    }}
                  />
                </Box>
              </Box>

              {/* Linha 2 - Email e Telefone */}
              <Box className={styles.formRow}>
                <Box className={styles.formField}>
                  <Typography variant="body1" className={styles.fieldLabel}>
                    E-mail *
                  </Typography>
                  <TextField
                    fullWidth
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    size="medium"
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px'
                      }
                    }}
                  />
                </Box>
                <Box className={styles.formField}>
                  <Typography variant="body1" className={styles.fieldLabel}>
                    Telefone
                  </Typography>
                  <TextField
                    fullWidth
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    variant="outlined"
                    size="medium"
                    placeholder="(31) 99999-9999"
                    disabled={isSubmitting}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px'
                      }
                    }}
                  />
                </Box>
              </Box>

              {/* Linha 3 - Assunto */}
              <Box className={styles.formRow}>
                <Box className={styles.formField} sx={{ flex: 1 }}>
                  <Typography variant="body1" className={styles.fieldLabel}>
                    Assunto
                  </Typography>
                  <TextField
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    size="medium"
                    placeholder="Sobre o que você gostaria de conversar?"
                    disabled={isSubmitting}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px'
                      }
                    }}
                  />
                </Box>
              </Box>

              {/* Linha 4 - Mensagem */}
              <Box className={styles.formRow}>
                <Box className={styles.formField} sx={{ flex: 1 }}>
                  <Typography variant="body1" className={styles.fieldLabel}>
                    Mensagem *
                  </Typography>
                  <TextField
                    fullWidth
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    size="medium"
                    placeholder="Descreva seu projeto, dúvidas ou solicitações..."
                    disabled={isSubmitting}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px'
                      },
                      '& .MuiOutlinedInput-multiline': {
                        padding: '16px'
                      }
                    }}
                  />
                </Box>
              </Box>

              {/* Botão de Enviar */}
              <Box className={styles.formActions}>
                <Button
                  type="submit"
                  variant="contained"
                  className={styles.submitButton}
                  endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
                <Typography variant="caption" className={styles.formNote}>
                  * Campos obrigatórios
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>

      {/* Snackbar para Feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity={snackbarSeverity}
          sx={{ 
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contato;