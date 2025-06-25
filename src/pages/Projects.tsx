import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Skeleton, Chip } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  image: string
  url: string
  technologies?: string[]
  githubUrl?: string
}

const fetchProjectsData = (): Promise<Project[]> => new Promise(resolve => setTimeout(() => resolve([
  {
    title: 'Trackaroo',
    description: 'A one stop shop for your job application journey built with React in TypeScript, Supabase, and Netlify.',
    image: './assets/trackaroo_logo.jpeg',
    url: 'https://trackaroo.netlify.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Netlify'],
    githubUrl: 'https://github.com/mattmac02/trackaroo'
  },
  {
    title: 'AI Investment Platform',
    description: 'Full-stack AI-enabled investment platform with real-time data processing and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    url: '/projects/ai-platform',
    technologies: ['Python', 'React', 'AWS', 'Machine Learning']
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with React and Material-UI.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    url: '/projects/portfolio',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Vite']
  }
]), 250))

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetching
    fetchProjectsData().then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  return (
    <Container maxWidth="lg">
      <Box sx={{
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 }
      }}>
        <Box sx={{
          mb: { xs: 3, md: 4 },
          p: { xs: 2, md: 3 },
          background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.02) 0%, rgba(33, 150, 243, 0.03) 100%)',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'rgba(33, 150, 243, 0.08)'
        }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              mb: 0.5,
              color: 'primary.main',
              fontWeight: 600
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: 'text.secondary',
              fontStyle: 'italic',
              fontSize: '0.9rem'
            }}
          >
            Showcasing my work in software development and technology
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {loading ? (
            [1, 2, 3].map((index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Card sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.08), 0 2px 4px rgba(0,0,0,0.06)',
                    borderColor: 'primary.main'
                  },
                  border: '1px solid',
                  borderColor: 'rgba(33, 150, 243, 0.08)',
                  background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 50%, #ffffff 100%)',
                  borderRadius: 1.5,
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #2196f3 0%, #1976d2 100%)',
                    borderRadius: '6px 6px 0 0'
                  }
                }}>
                  <Skeleton variant="rectangular" width="100%" height={160} />
                  <CardContent sx={{ p: 2.5 }}>
                    <Skeleton variant="text" width="80%" height={32} sx={{ mb: 1 }} />
                    <Skeleton variant="text" width="60%" height={24} sx={{ mb: 1.5 }} />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Skeleton variant="rectangular" width={60} height={24} />
                      <Skeleton variant="rectangular" width={70} height={24} />
                      <Skeleton variant="rectangular" width={50} height={24} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            projects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                {project.url.startsWith('http') ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Card sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.01)',
                        boxShadow: '0 6px 16px rgba(33, 150, 243, 0.12), 0 2px 6px rgba(0,0,0,0.08)',
                        borderColor: 'primary.main',
                        '& .project-icon': {
                          transform: 'scale(1.05)',
                          color: 'primary.dark'
                        }
                      },
                      border: '1px solid',
                      borderColor: 'rgba(33, 150, 243, 0.08)',
                      background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 50%, #ffffff 100%)',
                      color: 'text.primary',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                      borderRadius: 1.5,
                      position: 'relative',
                      overflow: 'visible',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #2196f3 0%, #1976d2 100%)',
                        borderRadius: '6px 6px 0 0'
                      }
                    }}>
                      <CardMedia
                        component="img"
                        height="160"
                        image={project.image}
                        alt={project.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: 2.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            sx={{
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: 'text.primary',
                              mb: 0
                            }}
                          >
                            {project.title}
                          </Typography>
                          <FaExternalLinkAlt
                            className="project-icon"
                            style={{
                              color: '#2196f3',
                              fontSize: '1rem',
                              transition: 'all 0.2s ease'
                            }}
                          />
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            fontSize: '0.85rem',
                            lineHeight: 1.5
                          }}
                        >
                          {project.description}
                        </Typography>
                        {project.technologies && (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                            {project.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                color="primary"
                                variant="outlined"
                                sx={{
                                  fontSize: '0.7rem',
                                  fontWeight: 500,
                                  borderWidth: '1px',
                                  '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 1px 3px rgba(33, 150, 243, 0.3)'
                                  },
                                  transition: 'all 0.2s ease'
                                }}
                              />
                            ))}
                          </Box>
                        )}
                        {project.githubUrl && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                            <FaGithub style={{ color: '#2196f3', fontSize: '0.8rem' }} />
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'primary.main',
                                fontSize: '0.7rem',
                                fontWeight: 500
                              }}
                            >
                              View on GitHub
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Link to={project.url} style={{ textDecoration: 'none' }}>
                    <Card sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.01)',
                        boxShadow: '0 6px 16px rgba(33, 150, 243, 0.12), 0 2px 6px rgba(0,0,0,0.08)',
                        borderColor: 'primary.main',
                        '& .project-icon': {
                          transform: 'scale(1.05)',
                          color: 'primary.dark'
                        }
                      },
                      border: '1px solid',
                      borderColor: 'rgba(33, 150, 243, 0.08)',
                      background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 50%, #ffffff 100%)',
                      color: 'text.primary',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                      borderRadius: 1.5,
                      position: 'relative',
                      overflow: 'visible',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #2196f3 0%, #1976d2 100%)',
                        borderRadius: '6px 6px 0 0'
                      }
                    }}>
                      <CardMedia
                        component="img"
                        height="160"
                        image={project.image}
                        alt={project.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: 2.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            sx={{
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: 'text.primary',
                              mb: 0
                            }}
                          >
                            {project.title}
                          </Typography>
                          <FaCode
                            className="project-icon"
                            style={{
                              color: '#2196f3',
                              fontSize: '1rem',
                              transition: 'all 0.2s ease'
                            }}
                          />
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            fontSize: '0.85rem',
                            lineHeight: 1.5
                          }}
                        >
                          {project.description}
                        </Typography>
                        {project.technologies && (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                            {project.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                color="primary"
                                variant="outlined"
                                sx={{
                                  fontSize: '0.7rem',
                                  fontWeight: 500,
                                  borderWidth: '1px',
                                  '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 1px 3px rgba(33, 150, 243, 0.3)'
                                  },
                                  transition: 'all 0.2s ease'
                                }}
                              />
                            ))}
                          </Box>
                        )}
                        {project.githubUrl && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                            <FaGithub style={{ color: '#2196f3', fontSize: '0.8rem' }} />
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'primary.main',
                                fontSize: '0.7rem',
                                fontWeight: 500
                              }}
                            >
                              View on GitHub
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>
  )
}

export default Projects
