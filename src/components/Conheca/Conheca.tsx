// components/Conheca/Conheca.tsx
import React from 'react';
import { 
  Box, 
  Container, 
  Typography,
  Divider
} from '@mui/material';
import { 
  Engineering,
  AutoAwesome,
  TrendingUp,
  Groups,
  Gavel,
  EmojiEvents,
  LocationOn,
  Star,
  CheckCircle,
  CorporateFare
} from '@mui/icons-material';
import styles from './Conheca.module.css';

const Conheca: React.FC = () => {
  return (
    <Box className={styles.conhecaSection}>
      {/* Hero Section */}
      <Box className={styles.heroSection}>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography 
              variant="h1" 
              className={styles.heroTitle}
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              Construtores de
              <Box component="span" className={styles.gradientText}> Futuro</Box>
            </Typography>
            <Typography 
              variant="h6" 
              className={styles.heroSubtitle}
              sx={{ 
                fontSize: { xs: '1rem', md: '1.25rem' },
                maxWidth: '600px'
              }}
            >
              Desde 2020, transformamos ideias em estruturas sólidas, 
              combinando expertise técnica com compromisso sustentável
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* História */}
      <Container maxWidth="lg">
        <Box className={styles.historiaSection}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h3" className={styles.sectionTitle}>
              Nossa <Box component="span" className={styles.highlight}>História</Box>
            </Typography>
            <Divider className={styles.titleDivider} />
          </Box>

          <Box className={styles.historiaContent}>
            <Box className={styles.fundacaoCard}>
              <Box className={styles.fundacaoIcon}>
                <Engineering sx={{ fontSize: 60 }} />
              </Box>
              <Typography variant="h5" className={styles.fundacaoTitle}>
                Fundação
              </Typography>
              <Typography variant="body1" className={styles.fundacaoText}>
                Em 2020, o Engenheiro Civil <strong>Alexandre Figueiredo Melquiades</strong> 
                fundou a AF Engenharia & Construtora em Nova Lima, Minas Gerais. 
                Desde então, nos dedicamos a obras que realmente transformam comunidades.
              </Typography>
              <Box className={styles.locationInfo}>
                <LocationOn className={styles.locationIcon} />
                <Typography variant="body2" className={styles.locationText}>
                  Sede em Nova Lima, MG • Atuação em múltiplos estados
                </Typography>
              </Box>
            </Box>

            {/* Diferenciais */}
            <Box className={styles.diferenciaisGrid}>
              {[
                {
                  icon: <AutoAwesome />,
                  title: "Inovação",
                  description: "Tecnologia de ponta em todos os projetos"
                },
                {
                  icon: <TrendingUp />,
                  title: "Crescimento",
                  description: "+50 projetos executados com excelência"
                },
                {
                  icon: <Groups />,
                  title: "Equipe",
                  description: "Profissionais especializados e comprometidos"
                },
                {
                  icon: <EmojiEvents />,
                  title: "Reconhecimento",
                  description: "100% de taxa de recontratação"
                }
              ].map((diferencial, index) => (
                <Box key={index} className={styles.diferencialCard}>
                  <Box className={styles.diferencialIcon}>
                    {diferencial.icon}
                  </Box>
                  <Typography variant="h6" className={styles.diferencialTitle}>
                    {diferencial.title}
                  </Typography>
                  <Typography variant="body2" className={styles.diferencialText}>
                    {diferencial.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Missão, Visão e Valores */}
        <Box className={styles.pilaresSection}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h3" className={styles.sectionTitle}>
              Pilares da <Box component="span" className={styles.highlight}>Excelência</Box>
            </Typography>
            <Divider className={styles.titleDivider} />
          </Box>

          <Box className={styles.pilaresGrid}>
            {/* Missão */}
            <Box className={styles.pilarCard}>
              <Box className={styles.pilarHeader}>
                <Box className={styles.pilarNumber}>01</Box>
                <Typography variant="h4" className={styles.pilarTitle}>
                  Missão
                </Typography>
              </Box>
              <Typography variant="body1" className={styles.pilarText}>
                Proporcionar soluções inovadoras e sustentáveis em engenharia, 
                entregando qualidade excepcional e superando expectativas.
              </Typography>
            </Box>

            {/* Visão */}
            <Box className={styles.pilarCard}>
              <Box className={styles.pilarHeader}>
                <Box className={styles.pilarNumber}>02</Box>
                <Typography variant="h4" className={styles.pilarTitle}>
                  Visão
                </Typography>
              </Box>
              <Typography variant="body1" className={styles.pilarText}>
                Ser referência nacional em construção civil, reconhecida pela 
                excelência, inovação e compromisso com o desenvolvimento sustentável.
              </Typography>
            </Box>

            {/* Valores */}
            <Box className={styles.valoresCard}>
              <Box className={styles.pilarHeader}>
                <Box className={styles.pilarNumber}>03</Box>
                <Typography variant="h4" className={styles.pilarTitle}>
                  Valores
                </Typography>
              </Box>
              <Box className={styles.valoresList}>
                {[
                  { icon: <Star />, text: "Pessoas em primeiro lugar" },
                  { icon: <CheckCircle />, text: "Excelência no atendimento" },
                  { icon: <Gavel />, text: "Ética e transparência" }
                ].map((valor, index) => (
                  <Box key={index} className={styles.valorItem}>
                    <Box className={styles.valorIcon}>
                      {valor.icon}
                    </Box>
                    <Typography variant="body1" className={styles.valorText}>
                      {valor.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Compromisso ESG */}
        <Box className={styles.esgSection}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h3" className={styles.sectionTitle}>
              Compromisso <Box component="span" className={styles.highlight}>ESG</Box>
            </Typography>
            <Typography variant="h6" className={styles.esgSubtitle}>
              Integramos sustentabilidade em cada etapa dos nossos projetos
            </Typography>
          </Box>

          <Box className={styles.esgGrid}>
            {/* Ambiental */}
            <Box className={styles.esgCard}>
              <Box className={styles.esgCardContent}>
                <Typography variant="h5" className={styles.esgTitle}>
                  Ambiental
                </Typography>
                <Typography variant="body2" className={styles.esgText}>
                  Gestão sustentável de recursos, eficiência energética e 
                  redução da pegada de carbono em todas as obras.
                </Typography>
              </Box>
              <Box className={styles.esgGradient} sx={{ background: 'linear-gradient(135deg, #00A859, #28A745)' }} />
            </Box>

            {/* Social */}
            <Box className={styles.esgCard}>
              <Box className={styles.esgCardContent}>
                <Box className={styles.esgIcon} sx={{ color: '#FF6B00' }}>
                  <Groups sx={{ fontSize: 48 }} />
                </Box>
                <Typography variant="h5" className={styles.esgTitle}>
                  Social
                </Typography>
                <Typography variant="body2" className={styles.esgText}>
                  Desenvolvimento comunitário, segurança no trabalho e 
                  investimento em capacitação profissional.
                </Typography>
              </Box>
              <Box className={styles.esgGradient} sx={{ background: 'linear-gradient(135deg, #FF6B00, #FF8B33)' }} />
            </Box>

            {/* Governança */}
            <Box className={styles.esgCard}>
              <Box className={styles.esgCardContent}>
                <Box className={styles.esgIcon} sx={{ color: '#003366' }}>
                  <CorporateFare sx={{ fontSize: 48 }} />
                </Box>
                <Typography variant="h5" className={styles.esgTitle}>
                  Governança
                </Typography>
                <Typography variant="body2" className={styles.esgText}>
                  Transparência total, compliance rigoroso e gestão ética 
                  em todas as operações.
                </Typography>
              </Box>
              <Box className={styles.esgGradient} sx={{ background: 'linear-gradient(135deg, #003366, #004080)' }} />
            </Box>
          </Box>
        </Box>

        {/* CTA Final */}
        <Box className={styles.ctaSection}>
          <Typography variant="h4" className={styles.ctaTitle}>
            Prontos para construir o futuro juntos?
          </Typography>
          <Typography variant="body1" className={styles.ctaText}>
            Cada projeto é uma oportunidade de criar impacto positivo 
            e legado duradouro para as comunidades.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Conheca;