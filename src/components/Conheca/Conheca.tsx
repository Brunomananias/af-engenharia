// components/Conheca/Conheca.tsx
import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import {
  Engineering,
  AutoAwesome,
  TrendingUp,
  Groups,
  EmojiEvents,
  LocationOn,
} from "@mui/icons-material";
import { motion } from "framer-motion"; // ← Import correto
import styles from "./Conheca.module.css";

// Animations - mantenha como está
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Conheca: React.FC = () => {
  return (
    <Box className={styles.conhecaSection}>
      {/* Hero Section com animação */}
      <Box className={styles.heroSection}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className={styles.heroContent}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Typography
                variant="h1"
                className={styles.heroTitle}
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Construtores de
                <motion.span
                  className={styles.gradientText}
                  initial={{ backgroundPosition: "200% center" }}
                  whileInView={{ backgroundPosition: "0% center" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  {" "}
                  Futuro
                </motion.span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h6"
                className={styles.heroSubtitle}
                sx={{
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  maxWidth: "600px",
                }}
              >
                Desde 2020, transformamos ideias em entregas sólidas, combinando
                expertise técnica com compromisso sustentável
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* História */}
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Box className={styles.historiaSection}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box className={styles.sectionHeader}>
                <Typography variant="h3" className={styles.sectionTitle}>
                  Nossa{" "}
                  <Box component="span" className={styles.highlight}>
                    História
                  </Box>
                </Typography>
                <Divider className={styles.titleDivider} />
              </Box>
            </motion.div>

            <Box className={styles.historiaContent}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Box className={styles.fundacaoCard}>
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <Box className={styles.fundacaoIcon}>
                      <Engineering sx={{ fontSize: 60 }} />
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Typography variant="h5" className={styles.fundacaoTitle}>
                      Fundação
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Typography variant="body1" className={styles.fundacaoText}>
                      Em 2020, o Engenheiro Civil{" "}
                      <strong>Alexandre Figueiredo Melquiades </strong>
                      fundou a AF Engenharia & Construtora em Nova Lima, Minas
                      Gerais. Desde então nos dedicamos a obras que realmente
                      transformam e levam inovação e dignidade a comunidades.
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Box className={styles.locationInfo}>
                      <LocationOn className={styles.locationIcon} />
                      <Typography
                        variant="body2"
                        className={styles.locationText}
                      >
                        Sede em Nova Lima, MG • Atuação em múltiplos estados
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>

              {/* Diferenciais simplificados */}
              <Box className={styles.diferenciaisGrid}>
                {[
                  {
                    icon: <AutoAwesome />,
                    title: "Inovação",
                    description: "Tecnologia de ponta em todos os projetos",
                  },
                  {
                    icon: <TrendingUp />,
                    title: "Crescimento",
                    description: "+50 projetos executados com excelência",
                  },
                  {
                    icon: <Groups />,
                    title: "Equipe",
                    description: "Profissionais especializados e comprometidos",
                  },
                  {
                    icon: <EmojiEvents />,
                    title: "Reconhecimento",
                    description: "100% de taxa de recontratação",
                  },
                ].map((diferencial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Box className={styles.diferencialCard}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Box className={styles.diferencialIcon}>
                          {diferencial.icon}
                        </Box>
                      </motion.div>
                      <Typography
                        variant="h6"
                        className={styles.diferencialTitle}
                      >
                        {diferencial.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className={styles.diferencialText}
                      >
                        {diferencial.description}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Conheca;
