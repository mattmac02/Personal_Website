import { Container, Typography, Box, Grid, Button, Skeleton, Chip } from '@mui/material'
import { Linkedin, Github, Download, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { FaReact, FaPython, FaAws, FaDatabase, FaNodeJs, FaDocker } from 'react-icons/fa'

const About = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 250)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    { name: 'React', icon: <FaReact />, color: 'primary' },
    { name: 'Python', icon: <FaPython />, color: 'secondary' },
    { name: 'AWS', icon: <FaAws />, color: 'default' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'primary' },
    { name: 'Databases', icon: <FaDatabase />, color: 'secondary' },
    { name: 'Docker', icon: <FaDocker />, color: 'default' }
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 }
      }}>
        {/* Header Section */}
        <Box sx={{
          mb: { xs: 4, md: 6 },
          textAlign: 'center'
        }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 600,
              mb: 1,
              color: 'primary.main',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontStyle: 'italic',
              fontSize: '1rem',
            }}
          >
            Full-Stack Engineer passionate about building impactful software
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Profile Image */}
          <Grid item xs={12} md={5}>
            {loading ? (
              <Skeleton
                variant="rectangular"
                width="100%"
                height={320}
                sx={{
                  borderRadius: 3,
                  maxWidth: 400,
                  mx: 'auto',
                  display: 'block'
                }}
              />
            ) : (
              <Box
                component="img"
                src="/assets/headshot.jpeg"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  borderRadius: 3,
                  display: 'block',
                  mx: 'auto',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
                alt="Profile"
              />
            )}
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={7}>
            {loading ? (
              <>
                <Skeleton variant="text" width="60%" height={48} sx={{ mb: 2 }} />
                <Skeleton variant="text" width="40%" height={32} sx={{ mb: 3 }} />
                <Skeleton variant="text" width="100%" height={60} sx={{ mb: 2 }} />
                <Skeleton variant="text" width="80%" height={60} sx={{ mb: 4 }} />
                <Skeleton variant="text" width="30%" height={32} sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Skeleton variant="rectangular" width={80} height={32} />
                  <Skeleton variant="rectangular" width={70} height={32} />
                  <Skeleton variant="rectangular" width={60} height={32} />
                </Box>
              </>
            ) : (
              <>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  Hi there! I'm Matthew
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'primary.main',
                    mb: 3,
                    fontWeight: 600,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                  }}
                >
                  Full-Stack Engineer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.7,
                    color: 'text.secondary',
                  }}
                >
                  A recent Computer Engineer graduate from Queen's University, I'm currently working as a Junior Full-Stack Engineer at Pivotal Life Sciences,
                  where I build AI functionalities to streamline the VC process. Previously, I was an AI Engineer at MoneyLion, developing core predictive
                  features through extensive testing procedures and feature extractions.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.7,
                    color: 'text.secondary',
                  }}
                >
                  I'm passionate about building and improving systems that make a difference in people's everyday lives through innovative software solutions.
                </Typography>

                {/* Skills Section */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                    fontSize: '1.1rem'
                  }}>
                    Core Technologies
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.map((skill) => (
                      <Chip
                        key={skill.name}
                        icon={skill.icon}
                        label={skill.name}
                        color={skill.color as any}
                        variant="outlined"
                        size="medium"
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          borderWidth: '1.5px',
                          '&:hover': {
                            backgroundColor: skill.color === 'primary' ? 'primary.main' :
                              skill.color === 'secondary' ? 'secondary.main' : 'rgba(0,0,0,0.08)',
                            color: skill.color === 'default' ? 'text.primary' : 'white',
                            transform: 'translateY(-1px)',
                            boxShadow: '0 2px 6px rgba(33, 150, 243, 0.3)'
                          },
                          transition: 'all 0.2s ease'
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Contact & Resume Section */}
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  alignItems: { xs: 'stretch', sm: 'center' }
                }}>
                  {/* Social Links */}
                  <Box sx={{
                    display: 'flex',
                    gap: 2,
                    justifyContent: { xs: 'center', sm: 'flex-start' }
                  }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(33, 150, 243, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(33, 150, 243, 0.15)',
                          transform: 'scale(1.05)'
                        }
                      }}
                      onClick={() => window.open('https://github.com/mattmac02', '_blank')}
                    >
                      <Github size={24} style={{ color: '#2196f3' }} />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(33, 150, 243, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(33, 150, 243, 0.15)',
                          transform: 'scale(1.05)'
                        }
                      }}
                      onClick={() => window.open('https://www.linkedin.com/in/matthew-maceachern/', '_blank')}
                    >
                      <Linkedin size={24} style={{ color: '#2196f3' }} />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(33, 150, 243, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(33, 150, 243, 0.15)',
                          transform: 'scale(1.05)'
                        }
                      }}
                      onClick={() => window.open('mailto:19mam37@queensu.ca', '_blank')}
                    >
                      <Mail size={24} style={{ color: '#2196f3' }} />
                    </Box>
                  </Box>

                  {/* Resume Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    href="/assets/Matthew_Resume.pdf"
                    download="Matthew_Resume.pdf"
                    startIcon={<Download size={20} />}
                    sx={{
                      textTransform: 'none',
                      px: 3,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 500,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)'
                      }
                    }}
                  >
                    Download Resume
                  </Button>
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default About
