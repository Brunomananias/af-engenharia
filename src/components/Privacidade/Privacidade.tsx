// components/Privacidade/Privacidade.tsx
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Stack,
  LinearProgress,
} from '@mui/material';
import { 
  EmojiEvents as TrophyIcon,
  Security as SecurityIcon,
  Handshake as HandshakeIcon,
  CheckCircle as CheckIcon,
  TrendingUp as TrendingIcon,
  Groups as PeopleIcon,
  Star as StarIcon
} from '@mui/icons-material';
import styles from './Privacidade.module.css';

const Privacidade: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'qualidade' | 'seguranca' | 'compromisso'>('qualidade');

  const renderQualityTab = () => (
    <Box className={styles.tabPanel}>
      <Box className={styles.policyHeader}>
        <Typography variant="h3" className={styles.policyTitle}>
          Política da Qualidade
        </Typography>
        <Paper className={`${styles.certificationBadge}`}>
          <TrophyIcon sx={{ mr: 1, fontSize: 20 }} />
          Sistema de Gestão da Qualidade
        </Paper>
      </Box>
      
      <Paper className={styles.policyCard} elevation={3}>
        <Box className={styles.policyStatement}>
          <Typography variant="h6" className={styles.statementText}>
            "Atender com <strong>ética e profissionalismo</strong> nossos clientes, 
            desenvolvendo serviços de engenharia com <strong>excelência e qualidade</strong>, 
            comprometidos com a satisfação das partes interessadas, 
            <strong> melhoria contínua</strong> do sistema de gestão da qualidade 
            e o atendimento aos requisitos aplicáveis."
          </Typography>
        </Box>
        
        <Box className={styles.qualityPrinciples} mt={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Princípios da Qualidade
          </Typography>
          
          <Box className={styles.principlesGrid}>
            {[
              { number: '01', title: 'Foco no Cliente', description: 'Entender e superar as expectativas dos nossos clientes em todos os projetos' },
              { number: '02', title: 'Liderança', description: 'Estabelecer unidade de propósito e condições para engajamento das equipes' },
              { number: '03', title: 'Engajamento', description: 'Capacitar e valorizar colaboradores competentes e comprometidos' },
              { number: '04', title: 'Abordagem de Processos', description: 'Gerir atividades como processos inter-relacionados em um sistema coerente' },
              { number: '05', title: 'Melhoria Contínua', description: 'Buscar permanentemente o aprimoramento do desempenho organizacional' },
              { number: '06', title: 'Tomada de Decisão', description: 'Baseada em evidências e análise crítica de dados e informações' },
            ].map((principle, index) => (
              <Paper key={index} className={styles.principleItem} elevation={1}>
                <Typography variant="h2" className={styles.principleNumber}>
                  {principle.number}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {principle.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {principle.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );

  const renderSafetyTab = () => (
    <Box className={styles.tabPanel}>
      <Box className={styles.policyHeader}>
        <Typography variant="h3" className={styles.policyTitle}>
          Segurança, Saúde e Meio Ambiente (SSMA)
        </Typography>
        <Paper className={`${styles.certificationBadge} ${styles.green}`}>
          <SecurityIcon sx={{ mr: 1, fontSize: 20 }} />
          Certificação ISO 14001 & ISO 45001
        </Paper>
      </Box>
      
      <Paper className={styles.policyCard} elevation={3}>
        <Box className={styles.smaStatement}>
          <Typography variant="body1">
            A <strong>AF Engenharia e Construtora</strong> tem um compromisso sério com 
            a <strong>redução do impacto ambiental</strong> e a <strong>proteção da vida</strong> 
            em cada um de seus projetos. Consideramos os aspectos de segurança, 
            saúde ocupacional e meio ambiente tão importantes quanto as demais variáveis de gestão.
          </Typography>
        </Box>
        
        <Box className={styles.smaPillars} mt={4}>
          <Typography variant="h4" gutterBottom>
            Nossos Pilares de SSMA
          </Typography>
          
          <Stack spacing={3}>
            {/* Prevenção e Proteção */}
            <Paper className={styles.pillarCategory} elevation={1}>
              <Box className={styles.pillarHeader}>
                <SecurityIcon className={styles.pillarIcon} />
                <Typography variant="h5">Prevenção e Proteção</Typography>
              </Box>
              <Box className={styles.pillarContent}>
                {[
                  { badge: 'PCMSO', title: 'Programa de Controle Médico de Saúde Ocupacional', 
                    description: 'Promoção e preservação da saúde através da prevenção, rastreamento e diagnóstico precoce de agravos relacionados ao trabalho' },
                  { badge: 'PPRA', title: 'Programa de Prevenção de Riscos Ambientais', 
                    description: 'Abordagem integrada para garantir ambiente de trabalho seguro e saudável, prevenindo acidentes e doenças ocupacionais' },
                  { badge: 'PGR', title: 'Programa de Gerenciamento de Riscos', 
                    description: 'Identificação, avaliação e controle de riscos em todas as etapas das obras' },
                ].map((program, index) => (
                  <Box key={index} className={styles.preventionItem}>
                    <Paper className={`${styles.preventionBadge} ${
                      program.badge === 'PCMSO' ? styles.safety :
                      program.badge === 'PPRA' ? styles.health :
                      styles.environment
                    }`}>
                      {program.badge}
                    </Paper>
                    <Box className={styles.preventionDetails}>
                      <Typography variant="h6">{program.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {program.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>

            {/* Conformidade Legal */}
            <Paper className={styles.pillarCategory} elevation={1}>
              <Box className={styles.pillarHeader}>
                <CheckIcon className={styles.pillarIcon} />
                <Typography variant="h5">Conformidade Legal</Typography>
              </Box>
              <Box className={styles.pillarContent}>
                <Stack spacing={1}>
                  {[
                    'Atendimento a NRs (Normas Regulamentadoras)',
                    'Cumprimento de leis ambientais federais, estaduais e municipais',
                    'Licenciamento ambiental de obras',
                    'Gestão de resíduos da construção civil',
                    'Protocolos de segurança do trabalho',
                  ].map((item, index) => (
                    <Box key={index} className={styles.complianceItem}>
                      <CheckIcon className={styles.checkIcon} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Paper>

            {/* Desafios e Metas */}
            <Paper className={styles.pillarCategory} elevation={1}>
              <Box className={styles.pillarHeader}>
                <TrendingIcon className={styles.pillarIcon} />
                <Typography variant="h5">Desafios e Metas</Typography>
              </Box>
              <Box className={styles.pillarContent}>
                <Box className={styles.goalsGrid}>
                  {[
                    { icon: <TrendingIcon />, title: 'Cumprimento de Prazos', 
                      description: 'Execução dentro dos cronogramas estabelecidos sem comprometer a segurança' },
                    { icon: <PeopleIcon />, title: 'Qualificação da Mão de Obra', 
                      description: 'Treinamento e capacitação contínua de colaboradores e parceiros' },
                    { icon: <HandshakeIcon />, title: 'Parcerias Especializadas', 
                      description: 'Colaboração com fornecedores e parceiros que compartilham nossos valores' },
                    { icon: <StarIcon />, title: 'Excelência em Qualidade', 
                      description: 'Garantia da qualidade em projetos, materiais e serviços executados' },
                  ].map((goal, index) => (
                    <Paper key={index} className={styles.goalItem} elevation={0}>
                      <Box className={styles.goalIcon}>{goal.icon}</Box>
                      <Typography variant="h6" gutterBottom>{goal.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {goal.description}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );

  const renderCommitmentTab = () => (
    <Box className={styles.tabPanel}>
      <Box className={styles.policyHeader}>
        <Typography variant="h3" className={styles.policyTitle}>
          Compromisso Social e Sustentabilidade
        </Typography>
        <Paper className={`${styles.certificationBadge} ${styles.blue}`}>
          <HandshakeIcon sx={{ mr: 1, fontSize: 20 }} />
          Princípios ESG Implementados
        </Paper>
      </Box>
      
      <Paper className={styles.policyCard} elevation={3}>
        <Box className={styles.esgIntro}>
          <Typography variant="body1">
            Na <strong>AF Engenharia e Construtora</strong>, acreditamos que o desenvolvimento 
            econômico deve andar de mãos dadas com a <strong>sustentabilidade e a responsabilidade 
            social</strong>. Cada obra é uma oportunidade de promover práticas que preservam o 
            meio ambiente, apoiam o bem-estar social e fortalecem uma governança ética.
          </Typography>
        </Box>
        
        <Box className={styles.esgPillars} mt={4}>
          <Box className={styles.esgPillar}>
            <Box className={`${styles.esgHeader} ${styles.environmental}`}>
              <Typography variant="h2" className={styles.esgLetter}>E</Typography>
              <Typography variant="h4">Ambiental</Typography>
            </Box>
            <Box className={styles.esgContent}>
              <ul className={styles.esgList}>
                <li>🌱 Gestão sustentável de recursos hídricos</li>
                <li>♻️ Reciclagem e reaproveitamento de materiais</li>
                <li>🌳 Preservação de áreas verdes e biodiversidade</li>
                <li>💡 Eficiência energética em obras e escritórios</li>
                <li>🚮 Gestão responsável de resíduos sólidos</li>
              </ul>
            </Box>
          </Box>
          
          <Box className={styles.esgPillar}>
            <Box className={`${styles.esgHeader} ${styles.social}`}>
              <Typography variant="h2" className={styles.esgLetter}>S</Typography>
              <Typography variant="h4">Social</Typography>
            </Box>
            <Box className={styles.esgContent}>
              <ul className={styles.esgList}>
                <li>👨‍👩‍👧‍👦 Desenvolvimento das comunidades locais</li>
                <li>🏘️ Inclusão social através da habitação</li>
                <li>👷 Valorização e capacitação de colaboradores</li>
                <li>🏥 Programas de saúde e bem-estar no trabalho</li>
                <li>🤲 Apoio a iniciativas sociais nas regiões de atuação</li>
              </ul>
            </Box>
          </Box>
          
          <Box className={styles.esgPillar}>
            <Box className={`${styles.esgHeader} ${styles.governance}`}>
              <Typography variant="h2" className={styles.esgLetter}>G</Typography>
              <Typography variant="h4">Governança</Typography>
            </Box>
            <Box className={styles.esgContent}>
              <ul className={styles.esgList}>
                <li>📊 Transparência em processos e contratos</li>
                <li>⚖️ Ética e compliance em todas as operações</li>
                <li>🔒 Proteção de dados e privacidade</li>
                <li>👥 Diversidade e igualdade de oportunidades</li>
                <li>📈 Gestão responsável e accountability</li>
              </ul>
            </Box>
          </Box>
        </Box>
        
        <Box className={styles.sustainabilityMetrics} mt={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Nossas Metas de Sustentabilidade 2025
          </Typography>
          <Box className={styles.metricsGrid}>
            {[
              { value: '-30%', label: 'Redução de Resíduos', progress: 65 },
              { value: '100%', label: 'Obras com Gestão de Riscos', progress: 85 },
              { value: '+50%', label: 'Reciclagem de Materiais', progress: 45 },
              { value: '0', label: 'Acidentes Graves', progress: 100 },
            ].map((metric, index) => (
              <Paper key={index} className={styles.metric} elevation={1}>
                <Typography variant="h3" className={styles.metricValue}>
                  {metric.value}
                </Typography>
                <Typography variant="body2" className={styles.metricLabel}>
                  {metric.label}
                </Typography>
                <Box sx={{ width: '100%', mt: 2 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={metric.progress} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#00A859',
                        borderRadius: 4,
                      }
                    }}
                  />
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );

  return (
    <Box className={styles.privacidadeSection}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom className="section-title">
          Políticas e Compromissos
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Nossos princípios de qualidade, segurança e sustentabilidade
        </Typography>

        {/* Navegação por abas */}
        <Box className={styles.policyTabs}>
          <Button
            variant={activeTab === 'qualidade' ? 'contained' : 'outlined'}
            className={`${styles.policyTab} ${activeTab === 'qualidade' ? styles.active : ''}`}
            onClick={() => setActiveTab('qualidade')}
            startIcon={<TrophyIcon />}
            sx={{ borderRadius: 5 }}
          >
            Qualidade
          </Button>
          <Button
            variant={activeTab === 'seguranca' ? 'contained' : 'outlined'}
            className={`${styles.policyTab} ${activeTab === 'seguranca' ? styles.active : ''}`}
            onClick={() => setActiveTab('seguranca')}
            startIcon={<SecurityIcon />}
            sx={{ borderRadius: 5 }}
          >
            Segurança & Meio Ambiente
          </Button>
          <Button
            variant={activeTab === 'compromisso' ? 'contained' : 'outlined'}
            className={`${styles.policyTab} ${activeTab === 'compromisso' ? styles.active : ''}`}
            onClick={() => setActiveTab('compromisso')}
            startIcon={<HandshakeIcon />}
            sx={{ borderRadius: 5 }}
          >
            Compromisso Social
          </Button>
        </Box>

        {/* Conteúdo das abas */}
        <Box className={styles.policyContent}>
          {activeTab === 'qualidade' && renderQualityTab()}
          {activeTab === 'seguranca' && renderSafetyTab()}
          {activeTab === 'compromisso' && renderCommitmentTab()}
        </Box>
      </Container>
    </Box>
  );
};

export default Privacidade;