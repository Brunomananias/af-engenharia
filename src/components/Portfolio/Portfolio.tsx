import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Chip,
  Stack,
  Dialog,
  DialogContent,
  IconButton,
  MobileStepper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { 
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Close as CloseIcon,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import styles from './Portfolio.module.css';
import mariana1 from '../../../public/assets/imagens/obras/mariana.jpeg';
import mariana2 from '../../../public/assets/imagens/obras/mariana-cachoeira-brumado.jpeg';
import mariana3 from '../../../public/assets/imagens/obras/mariana1.jpeg';
import salinas1 from '../../../public/assets/imagens/obras/salinas.jpeg';
import salinas2 from '../../../public/assets/imagens/obras/salinas1.jpeg';
import salinas3 from '../../../public/assets/imagens/obras/salinas2.jpeg';
import pecanha1 from '../../../public/assets/imagens/obras/peçanha.jpeg';
import pecanha2 from '../../../public/assets/imagens/obras/peçanha1.jpeg';
import pecanha3 from '../../../public/assets/imagens/obras/peçanha2.jpeg';
import rioparanaiba1 from '../../../public/assets/imagens/obras/rio-paranaiba.jpeg';
import rioparanaiba2 from '../../../public/assets/imagens/obras/rio-paranaiba1.jpeg';
import rioparanaiba3 from '../../../public/assets/imagens/obras/rio-paranaiba2.jpeg';
import catasaltas1 from '../../../public/assets/imagens/obras/catas-altas.jpeg';
import catasaltas2 from '../../../public/assets/imagens/obras/catas-altas1.jpeg';
import catasaltas3 from '../../../public/assets/imagens/obras/catas-altas2.jpeg';
import itabira1 from '../../../public/assets/imagens/obras/itabira.jpeg';
import itabira2 from '../../../public/assets/imagens/obras/itabira1.jpeg';
import itabira3 from '../../../public/assets/imagens/obras/itabira2.jpeg';
import bambui1 from '../../../public/assets/imagens/obras/bambui.jpeg';
import bambui2 from '../../../public/assets/imagens/obras/bambui1.jpeg';
import bambui3 from '../../../public/assets/imagens/obras/bambui2.jpeg';
import formiga1 from '../../../public/assets/imagens/obras/formiga.jpeg';
import formiga2 from '../../../public/assets/imagens/obras/formiga1.jpeg';
import formiga3 from '../../../public/assets/imagens/obras/formiga2.jpeg';
import marianaesgotamento1 from '../../../public/assets/imagens/obras/mariana-esgotamento.jpeg';
import marianaesgotamento2 from '../../../public/assets/imagens/obras/mariana-esgotamento1.jpeg';
import marianaesgotamento3 from '../../../public/assets/imagens/obras/mariana-esgotamento2.jpeg';
import manga1 from '../../../public/assets/imagens/obras/manga.jpeg';
import manga2 from '../../../public/assets/imagens/obras/manga1.jpeg';
import manga3 from '../../../public/assets/imagens/obras/manga2.jpeg';
import sinop1 from '../../../public/assets/imagens/obras/sinop.jpeg';
import sinop2 from '../../../public/assets/imagens/obras/sinop1.jpeg';
import sinop3 from '../../../public/assets/imagens/obras/sinop2.jpeg';
import hemobras1 from '../../../public/assets/imagens/obras/hemobras.jpeg';
import hemobras2 from '../../../public/assets/imagens/obras/hemobras1.jpeg';
import hemobras3 from '../../../public/assets/imagens/obras/hemobras2.jpeg';
interface ProjectImage {
  url: string;
}

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  status: 'completed' | 'ongoing';
  year: string;
  category: string;
  images: ProjectImage[];
}

// Componente de Carrossel de Fotos
const ProjectCarousel: React.FC<{ 
  images: ProjectImage[]; 
  projectTitle: string;
}> = ({ images, projectTitle }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => 
      prevStep === 0 ? images.length - 1 : prevStep - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setActiveStep(index);
    setOpen(true);
  };

  return (
    <>
      {/* Miniaturas das Fotos */}
      <Box className={styles.imageThumbnails}>
        {images.slice(0, 3).map((image, index) => (
          <Box 
            key={index}
            className={styles.thumbnail}
            onClick={() => handleThumbnailClick(index)}
            sx={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s, opacity 0.2s',
              '&:hover': { 
                transform: 'scale(1.05)',
                opacity: 0.9
              }
            }}
          />
        ))}
        {images.length > 3 && (
          <Box 
            className={styles.moreImages}
            onClick={() => setOpen(true)}
          >
            +{images.length - 3}
          </Box>
        )}
      </Box>

      {/* Modal do Carrossel */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            m: 0,
            maxHeight: '90vh'
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative', bgcolor: 'black' }}>
          {/* Botão de Fechar */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 10,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { 
                bgcolor: 'rgba(0,0,0,0.8)'
              }
            }}
            size="large"
          >
            <CloseIcon />
          </IconButton>

          {/* Botão Anterior */}
          {!isMobile && images.length > 1 && (
            <IconButton
              onClick={handleBack}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { 
                  bgcolor: 'rgba(0,0,0,0.8)'
                }
              }}
              size="large"
            >
              <ChevronLeft fontSize="large" />
            </IconButton>
          )}

          {/* Imagem Atual */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: isMobile ? '70vh' : '75vh',
            overflow: 'hidden'
          }}>
            <img
              src={images[activeStep].url}
              alt={`${projectTitle} - ${images[activeStep]}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                userSelect: 'none'
              }}
            />
          </Box>

          {/* Botão Próximo */}
          {!isMobile && images.length > 1 && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { 
                  bgcolor: 'rgba(0,0,0,0.8)'
                }
              }}
              size="large"
            >
              <ChevronRight fontSize="large" />
            </IconButton>
          )}

          {/* Indicadores para Mobile */}
          {isMobile && images.length > 1 && (
            <MobileStepper
              steps={images.length}
              position="static"
              activeStep={activeStep}
              sx={{ 
                bgcolor: 'black',
                '& .MuiMobileStepper-dot': {
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  '&.MuiMobileStepper-dotActive': {
                    backgroundColor: 'white'
                  }
                }
              }}
              nextButton={
                <IconButton
                  size="large"
                  onClick={handleNext}
                  sx={{ color: 'white' }}
                >
                  <KeyboardArrowRight />
                </IconButton>
              }
              backButton={
                <IconButton
                  size="large"
                  onClick={handleBack}
                  sx={{ color: 'white' }}
                >
                  <KeyboardArrowLeft />
                </IconButton>
              }
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

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
      category: "Infraestrutura",
      images: [
        {
          url: mariana1,
        },
        {
          url: mariana2,
        },
        {
          url: mariana3,
        }
      ]
    },
    {
      id: 2,
      title: "Revitalização da Orla do Rio Salinas",
      location: "Salinas/MG",
      description: "Muro de Gabião, Urbanização e Construções Civis",
      status: "completed",
      year: "2023",
      category: "Infraestrutura",
      images: [
        {
          url: salinas1,
        },
        {
          url: salinas2,
        },
        {
          url: salinas3,
        }
      ]
    },
    {
      id: 3,
      title: "Sistema de Esgotamento Sanitário",
      location: "Peçanha/MG",
      description: "Rede de interceptores e estação de tratamento modular Rafa-Fan",
      status: "completed",
      year: "2023",
      category: "Saneamento",
      images: [
        {
          url: pecanha1,
        },
        {
          url: pecanha2,
        },
        {
          url: pecanha3,
        }
      ]
    },
    {
      id: 4,
      title: "Estação de Tratamento de Esgoto",
      location: "Rio Paranaíba/MG",
      description: "ETE, rede de emissário e estação elevatória",
      status: "completed",
      year: "2023",
      category: "Saneamento",
      images: [
        {
          url: rioparanaiba1,
        },
        {
          url: rioparanaiba2,
        },
        {
          url: rioparanaiba3,
        }
      ]
    },
    {
      id: 5,
      title: "ETE Ponte dos Perdões",
      location: "Catas Altas/MG",
      description: "Construção da estação de tratamento de esgotos",
      status: "completed",
      year: "2024",
      category: "Saneamento",
      images: [
        {
          url: catasaltas1,
        },
        {
          url: catasaltas2,
        },
        {
          url: catasaltas3,
        }
      ]
    },
    {
      id: 6,
      title: "ETE Pedreira do Instituto",
      location: "Itabira/MG",
      description: "Construção da estação de tratamento de esgotos",
      status: "ongoing",
      year: "2023-presente",
      category: "Saneamento",
      images: [
        {
          url: itabira1,
        },
        {
          url: itabira2,
        },
        {
          url: itabira3,
        }
      ]
    },
    {
      id: 7,
      title: "Sistema de Esgotamento Sanitário",
      location: "Mariana/MG",
      description: "Rede coletoras e interceptoras - 1ª etapa",
      status: "ongoing",
      year: "2023-presente",
      category: "Saneamento",
      images: [
        {
          url: marianaesgotamento1,
        },
        {
          url: marianaesgotamento2,
        },
        {
          url: marianaesgotamento3,
        }
      ]
    },
    {
      id: 8,
      title: "Sistema de Esgotamento Sanitário",
      location: "Bambuí/MG",
      description: "Implantação completa do sistema de esgotamento",
      status: "ongoing",
      year: "2024-presente",
      category: "Saneamento",
      images: [
        {
          url: bambui1,
        },
        {
          url: bambui2,
        },
        {
          url: bambui3,
        }
      ]
    },
    {
      id: 9,
      title: "Interceptores e Estações Elevatórias",
      location: "Formiga/MG",
      description: "Rios Formiga e Mata Cavalo",
      status: "ongoing",
      year: "2025-presente",
      category: "Saneamento",
      images: [
        {
          url: formiga1,
        },
        {
          url: formiga2,
        },
        {
          url: formiga3,
        }
      ]
    },
    {
      id: 10,
      title: "Revitalização da Orla do Rio São Francisco",
      location: "Manga/MG",
      description: "Construção e revitalização de infraestrutura",
      status: "ongoing",
      year: "2025-presente",
      category: "Infraestrutura",
      images: [
        {
          url: manga1,
        },
        {
          url: manga2,
        },
        {
          url: manga3,
        }
      ]
    },
    {
      id: 11,
      title: "Sistema de Esgotamento",
      location: "Sinop/MT",
      description: "Interceptor, linha de recalque e rede coletora",
      status: "ongoing",
      year: "2025-presente",
      category: "Saneamento",
      images: [
        {
          url: sinop1,
        },
        {
          url: sinop2,
        },
        {
          url: sinop3,
        }
      ]
    },
    {
      id: 12,
      title: "Estação de Tratamento de Efluentes",
      location: "Hemobrás - Goiana/PE",
      description: "ETE para efluentes sanitários e industriais",
      status: "ongoing",
      year: "2025-presente",
      category: "Saneamento",
      images: [
        {
          url: hemobras1,
        },
        {
          url: hemobras2,
        },
        {
          url: hemobras3,
        }
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <Box className={styles.portfolioSection} id="portfolio">
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
            sx={{ 
              borderRadius: 2,
              minWidth: { xs: '100%', sm: 'auto' }
            }}
          >
            Todos os Projetos
          </Button>
          <Button
            variant={filter === 'completed' ? 'contained' : 'outlined'}
            color="success"
            onClick={() => setFilter('completed')}
            sx={{ 
              borderRadius: 2,
              minWidth: { xs: '100%', sm: 'auto' }
            }}
            startIcon={<CheckIcon />}
          >
            Obras Finalizadas
          </Button>
          <Button
            variant={filter === 'ongoing' ? 'contained' : 'outlined'}
            color="warning"
            onClick={() => setFilter('ongoing')}
            sx={{ 
              borderRadius: 2,
              minWidth: { xs: '100%', sm: 'auto' }
            }}
            startIcon={<ScheduleIcon />}
          >
            Obras em Andamento
          </Button>
        </Box>
        
        {/* Contador de Projetos */}
        <Typography variant="body1" align="center" sx={{ mb: 3, color: 'text.secondary' }}>
          Mostrando {filteredProjects.length} de {projects.length} projetos
        </Typography>
        
        {/* Grid de Projetos */}
        <Box className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <Paper key={project.id} className={`${styles.projectCard} ${project.status}`} elevation={3}>
              <Box className={styles.projectStatus}>
                <Chip 
                  label={project.status === 'completed' ? 'Concluído' : 'Em Andamento'}
                  color={project.status === 'completed' ? 'success' : 'warning'}
                  size="small"
                  icon={project.status === 'completed' ? <CheckIcon /> : <ScheduleIcon />}
                />
                <Typography variant="caption" color="text.secondary" fontWeight="medium">
                  {project.year}
                </Typography>
              </Box>
              
              <Box className={styles.projectContent}>
                <Typography variant="h6" className={styles.projectTitle}>
                  {project.title}
                </Typography>
                
                <Box className={styles.projectLocation}>
                  <LocationIcon fontSize="small" sx={{ mr: 0.5, color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    {project.location}
                  </Typography>
                </Box>
                
                <Typography variant="body2" className={styles.projectDescription}>
                  {project.description}
                </Typography>
                
                {/* Carrossel de Fotos */}
                <Box sx={{ my: 2 }}>
                  <ProjectCarousel 
                    images={project.images} 
                    projectTitle={project.title} 
                  />
                </Box>
                
                <Chip 
                  label={project.category}
                  size="small"
                  variant="outlined"
                  sx={{ 
                    mt: 1,
                    borderColor: '#003366',
                    color: '#003366',
                    fontWeight: 'medium'
                  }}
                />
              </Box>
            </Paper>
          ))}
        </Box>
        
        {/* Serviços */}
        <Paper className={styles.servicesSection} elevation={3}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, color: '#003366' }}>
            Nossas Atribuições
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
            Especialidades e áreas de atuação
          </Typography>
          
          <Box className={styles.servicesGrid}>
            <Box className={styles.serviceCategory}>
              <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                🏗️ Construções Civis
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">✓ Projeto e execução de obras prediais</Typography>
                <Typography variant="body2">✓ Reformas prediais</Typography>
                <Typography variant="body2">✓ Laudos técnicos</Typography>
                <Typography variant="body2">✓ Projetos arquitetônicos</Typography>
                <Typography variant="body2">✓ Projetos e execução de paisagismo</Typography>
              </Stack>
            </Box>
            
            <Box className={styles.serviceCategory}>
              <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                🛣️ Infraestrutura
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">✓ Sistema de Drenagem Pluvial</Typography>
                <Typography variant="body2">✓ Sistema de Esgotamento Sanitário</Typography>
                <Typography variant="body2">✓ Sistema de Abastecimento de Água</Typography>
                <Typography variant="body2">✓ Canalização de córregos</Typography>
                <Typography variant="body2">✓ Loteamentos e Estruturas de Contenção</Typography>
                <Typography variant="body2">✓ Infraestrutura viária e Terraplenagem</Typography>
              </Stack>
            </Box>
            
            <Box className={styles.serviceCategory}>
              <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                🏗️ Locação de Equipamentos
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">✓ Escavadeiras Hidráulicas</Typography>
                <Typography variant="body2">✓ Guindastes e Gruas</Typography>
                <Typography variant="body2">✓ Muques e Equipamentos Pesados</Typography>
                <Typography variant="body2">✓ Patrol e Compactadores</Typography>
                <Typography variant="body2">✓ Betoneiras e Equipamentos de Concreto</Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Portfolio;