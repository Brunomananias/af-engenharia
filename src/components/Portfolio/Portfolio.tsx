// components/Portfolio/Portfolio.tsx
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Chip,
  Stack,
} from '@mui/material';
import { 
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import styles from './Portfolio.module.css';

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  status: 'completed' | 'ongoing';
  year: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Adutora de Água",
      location: "Cachoeira do Brumado - Mariana/MG",
      description: "Execução de obra de adutora de água pelo SAAE de Mariana",
      status: "completed",
      year: "2023",
      category: "Infraestrutura"
    },
    {
      id: 2,
      title: "Revitalização da Orla do Rio Salinas",
      location: "Salinas/MG",
      description: "Muro de Gabião, Urbanização e Construções Civis",
      status: "completed",
      year: "2023",
      category: "Infraestrutura"
    },
    {
      id: 3,
      title: "Sistema de Esgotamento Sanitário",
      location: "Peçanha/MG",
      description: "Rede de interceptores e estação de tratamento modular Rafa-Fan",
      status: "completed",
      year: "2023",
      category: "Saneamento"
    },
    {
      id: 4,
      title: "Estação de Tratamento de Esgoto",
      location: "Rio Paranaíba/MG",
      description: "ETE, rede de emissário e estação elevatória",
      status: "completed",
      year: "2023",
      category: "Saneamento"
    },
    {
      id: 5,
      title: "ETE Ponte dos Perdões",
      location: "Catas Altas/MG",
      description: "Construção da estação de tratamento de esgotos",
      status: "completed",
      year: "2024",
      category: "Saneamento"
    },
    {
      id: 6,
      title: "ETE Pedreira do Instituto",
      location: "Itabira/MG",
      description: "Construção da estação de tratamento de esgotos",
      status: "ongoing",
      year: "2023-presente",
      category: "Saneamento"
    },
    {
      id: 7,
      title: "Sistema de Esgotamento Sanitário",
      location: "Mariana/MG",
      description: "Rede coletoras e interceptoras - 1ª etapa",
      status: "ongoing",
      year: "2023-presente",
      category: "Saneamento"
    },
    {
      id: 8,
      title: "Sistema de Esgotamento Sanitário",
      location: "Bambuí/MG",
      description: "Implantação completa do sistema de esgotamento",
      status: "ongoing",
      year: "2024-presente",
      category: "Saneamento"
    },
    {
      id: 9,
      title: "Interceptores e Estações Elevatórias",
      location: "Formiga/MG",
      description: "Rios Formiga e Mata Cavalo",
      status: "ongoing",
      year: "2025-presente",
      category: "Saneamento"
    },
    {
      id: 10,
      title: "Revitalização da Orla do Rio São Francisco",
      location: "Manga/MG",
      description: "Construção e revitalização de infraestrutura",
      status: "ongoing",
      year: "2025-presente",
      category: "Infraestrutura"
    },
    {
      id: 11,
      title: "Sistema de Esgotamento",
      location: "Sinop/MT",
      description: "Interceptor, linha de recalque e rede coletora",
      status: "ongoing",
      year: "2025-presente",
      category: "Saneamento"
    },
    {
      id: 12,
      title: "Estação de Tratamento de Efluentes",
      location: "Hemobrás - Goiana/PE",
      description: "ETE para efluentes sanitários e industriais",
      status: "ongoing",
      year: "2025-presente",
      category: "Saneamento"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <Box className={styles.portfolioSection}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom className="section-title">
          Nosso Portfólio
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Projetos 2023-2025
        </Typography>
        
        {/* Filtros */}
        <Box className={styles.portfolioFilter}>
          <Button
            variant={filter === 'all' ? 'contained' : 'outlined'}
            onClick={() => setFilter('all')}
            sx={{ borderRadius: 2 }}
          >
            Todos os Projetos
          </Button>
          <Button
            variant={filter === 'completed' ? 'contained' : 'outlined'}
            color="success"
            onClick={() => setFilter('completed')}
            sx={{ borderRadius: 2 }}
            startIcon={<CheckIcon />}
          >
            Obras Finalizadas
          </Button>
          <Button
            variant={filter === 'ongoing' ? 'contained' : 'outlined'}
            color="warning"
            onClick={() => setFilter('ongoing')}
            sx={{ borderRadius: 2 }}
            startIcon={<ScheduleIcon />}
          >
            Obras em Andamento
          </Button>
        </Box>
        
        {/* Grid de Projetos */}
        <Box className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <Paper key={project.id} className={`${styles.projectCard} ${project.status}`} elevation={3}>
              <Box className={styles.projectStatus}>
                <Chip 
                  label={project.status === 'completed' ? 'Concluído' : 'Em Andamento'}
                  color={project.status === 'completed' ? 'success' : 'warning'}
                  size="small"
                />
                <Typography variant="caption" color="text.secondary">
                  {project.year}
                </Typography>
              </Box>
              
              <Box className={styles.projectContent}>
                <Typography variant="h6" className={styles.projectTitle}>
                  {project.title}
                </Typography>
                
                <Box className={styles.projectLocation}>
                  <LocationIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {project.location}
                  </Typography>
                </Box>
                
                <Typography variant="body2" className={styles.projectDescription}>
                  {project.description}
                </Typography>
                
                <Chip 
                  label={project.category}
                  size="small"
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Box>
            </Paper>
          ))}
        </Box>
        
        {/* Serviços */}
        <Paper className={styles.servicesSection} elevation={3}>
          <Typography variant="h4" align="center" gutterBottom>
            Nossas Atribuições
          </Typography>
          
          <Box className={styles.servicesGrid}>
            <Box className={styles.serviceCategory}>
              <Typography variant="h5" gutterBottom color="primary">
                Construções Civis
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">• Projeto e execução de obras prediais</Typography>
                <Typography variant="body2">• Reformas prediais</Typography>
                <Typography variant="body2">• Laudos técnicos</Typography>
                <Typography variant="body2">• Projetos arquitetônicos</Typography>
                <Typography variant="body2">• Projetos e execução de paisagismo</Typography>
              </Stack>
            </Box>
            
            <Box className={styles.serviceCategory}>
              <Typography variant="h5" gutterBottom color="primary">
                Infraestrutura
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">• Sistema de Drenagem Pluvial</Typography>
                <Typography variant="body2">• Sistema de Esgotamento Sanitário</Typography>
                <Typography variant="body2">• Sistema de Abastecimento de Água</Typography>
                <Typography variant="body2">• Canalização de córregos</Typography>
                <Typography variant="body2">• Loteamentos e Estruturas de Contenção</Typography>
                <Typography variant="body2">• Infraestrutura viária e Terraplenagem</Typography>
              </Stack>
            </Box>
            
            <Box className={styles.serviceCategory}>
              <Typography variant="h5" gutterBottom color="primary">
                Locação de Equipamentos
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">• Escavadeiras</Typography>
                <Typography variant="body2">• Guindastes</Typography>
                <Typography variant="body2">• Muques</Typography>
                <Typography variant="body2">• Patrol</Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Portfolio;