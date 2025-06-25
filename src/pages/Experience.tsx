import { Typography, Box, Grid, Card, CardContent, Chip, Paper, List, ListItem, ListItemText, Skeleton, Link, IconButton, Collapse } from '@mui/material'
import { useState, useEffect } from 'react'
import { FaChevronDown, FaChevronUp, FaGamepad, FaUsers, FaTrophy, FaBrain, FaCode, FaRunning, FaBasketballBall, FaSwimmer, FaUserNinja, FaVolleyballBall } from 'react-icons/fa'

interface Experience {
  year: string
  title: string
  company: string
  location: string
  description: string[]
  website?: string
}

interface Education {
  year: string
  degree: string
  school: string
  location: string
  description: string
}

interface Extracurricular {
  id: string
  title: string
  category: 'sports' | 'music' | 'leadership' | 'academic' | 'community' | 'hobbies'
  icon: React.ReactNode
  year: string
  description: string
  achievements: string[]
  skills: string[]
  expanded?: boolean
}

interface Technologies {
  frontend: string[]
  backend: string[]
  tools: string[]
}

const fetchExperienceData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    year: '2024 - Present',
    title: 'Full-Stack Engineer',
    location: 'San Francisco, CA',
    company: 'Pivotal Life Sciences',
    website: 'https://pivotallifesciences.com',
    description: [
      'Currently working on the development of a new AI-powered investment platform for Pivotal Life Sciences.',
    ],
  },
  {
    year: '2024 - Present',
    title: 'Junior Full-Stack Engineer',
    location: 'San Francisco, CA',
    company: 'Pivotal Life Sciences',
    website: 'https://pivotallifesciences.com',
    description: [
      'Curently working.',
    ],
  },
  {
    year: '2023',
    title: 'Full-Stack Engineer Intern',
    location: 'San Francisco, CA',
    company: 'Pivotal Life Sciences',
    website: 'https://pivotallifesciences.com',
    description: [
      `Executed the development of the application layer for Pivotal's first AI-enabled investment platform. The platform is now a
      core internal tool used daily by a team of 35+ people to make investments.`,
      `Optimized application layer efficiency with a comprehensive architecture comparison & analysis. Built evaluation matrices
      from scratch. Deployed architecture that minimized cost and maintained max performance (response latency of < 100ms).`,
      `Developed a robust application layer using a Python backend with the AWS Cloud Development Kit that utilizes Lambda,
      relational & key-value databases, Cognito for authentication, and a React frontend utilizing a REST API and Material UI.`,
    ],
  },
  {
    year: '2022',
    title: 'Artificial Intelligence Engineer',
    location: 'Kuala Lumpur, Malaysia',
    company: 'MoneyLion',
    website: 'https://moneylion.com',
    description: [
      `Developed an ETL pipeline for the automation of sanity testing and profiling on MoneyLion's core AI models.`,
      `Developed a Python program for automatic data extraction and profiling from S3, enabling data-driven testing conditions.
      The data was then integrated with Snowflake, backing marketing funnel KPIs to boost campaign performance.`,
      'Utilized AWS, Docker, Kubernetes, Codefresh, Airflow, Snowflake (SQL), Great Expectations, Git, Jira, and Confluence.',
    ],
  },
  {
    year: '2022',
    title: 'Fellow',
    location: 'Toronto, ON',
    company: `Cansbridge Fellowship`,
    website: 'https://cansbridgefellowship.com',
    description: [
      `Selected as one of 27 students out of 1000+ applicants (~3% acceptance rate) awarded a $10,000 grant and invited to become a Fellow. Used the grant to pursue an engineering internship in Asia.`
    ]
  },
]), 250))

const fetchEducationData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    year: '2020 - 2024',
    degree: 'Bachelor of Applied Science in Computer Engineering',
    school: `Queen's University`,
    location: 'Kingston, ON',
    description: `Graduated with Dean's List Honors, specialized in Software Engineering`
  },
]), 250))

const fetchTechnologiesData = () => new Promise(resolve => setTimeout(() => resolve({
  frontend: ['React', 'TypeScript', 'Material-UI', 'NextJS', 'CSS3', 'HTML5'],
  backend: ['AWS', 'Node.js', 'Python', 'PostgreSQL', 'Snowflake'],
  tools: ['Airflow', 'Git', 'Docker', 'AWS', 'Jenkins', 'Jira']
}), 250))

const fetchExtracurricularData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    id: '1',
    title: 'District All-Star & Team Captain',
    category: 'sports' as const,
    icon: <FaBasketballBall />,
    year: '2016 - 2020',
    description: 'Led my basketball team to multiple provincial championships while maintaining academic excellence.',
    achievements: [
      'Team Captain for 4 consecutive years',
      'Led team to 2 provincial championships',
      '4 time District All-Star selection',
      '4 time Team Captain',
    ],
    skills: ['Leadership', 'Team Management', 'Communication', 'Time Management']
  },
  {
    id: '2',
    title: 'All-Star & Team Captain',
    category: 'sports' as const,
    icon: <FaVolleyballBall />,
    year: '2021 - 2024',
    description: 'Led my volleyball team to multiple district and provincial championships while maintaining academic excellence.',
    achievements: [
      'Placed 3rd in the province',
      'District All-Star selection',
      'Team Captain for 2 consecutive years',
    ],
    skills: ['Leadership', 'Team Management', 'Communication', 'Time Management']
  },
  {
    id: '3',
    title: 'Brazilian Jiu-Jitsu Club',
    category: 'sports' as const,
    icon: <FaUserNinja />,
    year: '2022 - 2024',
    description: 'Participated in Brazilian Jiu-Jitsu club for 2 years, achieving a white belt.',
    achievements: [
      'Achieved a white belt',
      'Competed in 2 tournaments',
    ],
    skills: ['Skill Adoption', 'Eagerness to Learn']
  },
  {
    id: '4',
    title: 'Advanced Open Water Scuba Diver',
    category: 'hobbies' as const,
    icon: <FaSwimmer />,
    year: '2021 - 2024',
    description: 'Completed the Advanced Open Water Scuba Diver course, achieving a certification to dive up to 100 feet.',
    achievements: [
      'Completed the Advanced Open Water Scuba Diver course',
      'Achieved a maximum dive depth of 100 feet',
    ],
    skills: ['Skill Adoption', 'Adventure']
  },
  {
    id: '5',
    title: `Queen's Technology and Media Club President`,
    category: 'technical' as const,
    icon: <FaCode />,
    year: '2023 - 2024',
    description: `Directly manage 50 students and a $20,000 budget, directing 4 cross-functional product teams building and launching software products.`,
    achievements: [
      'Managed 40+ students and a $20,000 budget',
      'Directed 4 cross-functional product teams',
      'Successfully launched 2 software products',
      'Partnered with local businesses to build software products for the university community',
    ],
    skills: ['Project Management', 'Technical Mentoring', 'Event Planning', 'Networking']
  },
]), 250))

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[] | null>(null)
  const [education, setEducation] = useState<Education[] | null>(null)
  const [technologies, setTechnologies] = useState<Technologies | null>(null)
  const [extracurriculars, setExtracurriculars] = useState<Extracurricular[] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    Promise.all([fetchExperienceData(), fetchEducationData(), fetchTechnologiesData(), fetchExtracurricularData()])
      .then(([expData, eduData, techData, extracurricularsData]) => {
        setExperiences(expData as Experience[])
        setEducation(eduData as Education[])
        setTechnologies(techData as Technologies)
        setExtracurriculars(extracurricularsData as Extracurricular[])
      })
  }, [])

  const handleExtracurricularToggle = (id: string) => {
    if (extracurriculars) {
      setExtracurriculars(extracurriculars.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      ))
    }
  }

  const filteredExtracurriculars = extracurriculars?.filter(item =>
    selectedCategory === 'all' || item.category === selectedCategory
  )

  const categories = [
    { key: 'all', label: 'All Activities', icon: <FaUsers /> },
    { key: 'technical', label: 'Technical', icon: <FaCode /> },
    { key: 'sports', label: 'Sports', icon: <FaRunning /> },
    { key: 'hobbies', label: 'Hobbies', icon: <FaGamepad /> }
  ]

  const loadingSkeleton = (
    <>
      <Skeleton variant="text" width="80%" height={40} />
      <Skeleton variant="text" width="60%" height={30} />
      <Skeleton variant="rectangular" width="100%" height={150} sx={{ mt: 2 }} />
    </>
  )

  return (
    <Grid container spacing={3} sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, md: 12 } }}>
      {/* Main Experience Section */}
      <Grid item xs={12} md={8}>
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
              mb: 2,
              color: 'primary.main',
              fontWeight: 600
            }}
          >
            Professional Experience
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {experiences === null ? (
              <>{loadingSkeleton}</>
            ) : (
              experiences.map((exp, index) => {
                const isSameCompany = index > 0 && experiences[index - 1].company === exp.company;
                const isLastInCompany = index === experiences.length - 1 || experiences[index + 1].company !== exp.company;

                return (
                  <Box key={index} sx={{ position: 'relative' }}>
                    {/* Connecting line for same company progression */}
                    {isSameCompany && (
                      <Box sx={{
                        position: 'absolute',
                        left: 16,
                        top: -16,
                        width: 2,
                        height: 16,
                        background: 'linear-gradient(180deg, #2196f3 0%, rgba(33, 150, 243, 0.3) 100%)',
                        zIndex: 1
                      }} />
                    )}

                    {/* Continuation line for ongoing progression */}
                    {!isLastInCompany && exp.company === experiences[index + 1].company && (
                      <Box sx={{
                        position: 'absolute',
                        left: 16,
                        bottom: -16,
                        width: 2,
                        height: 16,
                        background: 'linear-gradient(180deg, rgba(33, 150, 243, 0.3) 0%, #2196f3 100%)',
                        zIndex: 1
                      }} />
                    )}

                    <Card
                      sx={{
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(33, 150, 243, 0.08), 0 2px 4px rgba(0,0,0,0.06)',
                          borderColor: 'primary.main'
                        },
                        border: '1px solid',
                        borderColor: isSameCompany ? 'rgba(33, 150, 243, 0.15)' : 'rgba(33, 150, 243, 0.08)',
                        background: isSameCompany
                          ? 'linear-gradient(145deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%)'
                          : 'linear-gradient(145deg, #ffffff 0%, #fafbfc 50%, #ffffff 100%)',
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
                          background: isSameCompany
                            ? 'linear-gradient(90deg, #2196f3 0%, #1976d2 50%, #2196f3 100%)'
                            : 'linear-gradient(90deg, #2196f3 0%, #1976d2 100%)',
                          borderRadius: '6px 6px 0 0'
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5 }}>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="h5"
                              component="h3"
                              sx={{
                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                fontWeight: 600,
                                color: 'text.primary',
                                mb: 0.5
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                              {exp.website ? (
                                <Link
                                  href={exp.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  color="primary"
                                  sx={{
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    '&:hover': {
                                      textDecoration: 'underline'
                                    }
                                  }}
                                >
                                  {exp.company}
                                </Link>
                              ) : (
                                <Typography
                                  color="primary"
                                  sx={{
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    fontWeight: 600
                                  }}
                                >
                                  {exp.company}
                                </Typography>
                              )}
                              <Typography
                                color="text.secondary"
                                sx={{
                                  fontSize: { xs: '0.7rem', md: '0.85rem' },
                                }}
                              >
                                • {exp.location}
                              </Typography>
                            </Box>
                            <Typography
                              variant="subtitle2"
                              color="text.primary"
                              sx={{
                                fontSize: { xs: '0.8rem', md: '0.9rem' },
                                fontWeight: 600
                              }}
                            >
                              {exp.year}
                            </Typography>
                          </Box>

                          {/* Career progression indicator */}
                          {isSameCompany && (
                            <Box sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              px: 1.5,
                              py: 0.5,
                              backgroundColor: 'rgba(33, 150, 243, 0.08)',
                              borderRadius: 1,
                              border: '1px solid',
                              borderColor: 'rgba(33, 150, 243, 0.15)',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              color: 'primary.main'
                            }}>
                              ↑ Promotion
                            </Box>
                          )}
                        </Box>

                        {exp.description.length > 0 ? (
                          <List sx={{ mt: 1.5, listStyleType: 'disc', pl: 1.5 }}>
                            {exp.description.map((desc, idx) => (
                              <ListItem key={idx} sx={{
                                display: 'list-item',
                                pl: 0,
                                py: 0.25,
                                '&::marker': {
                                  color: 'primary.main',
                                  fontWeight: 'bold'
                                }
                              }}>
                                <ListItemText
                                  primary={desc}
                                  sx={{
                                    '& .MuiListItemText-primary': {
                                      fontSize: '0.85rem',
                                      lineHeight: 1.5,
                                      color: 'text.secondary'
                                    }
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        ) : (
                          <Typography variant="body2" sx={{ mt: 1.5, fontStyle: 'italic', color: 'text.secondary' }}>
                            No description provided.
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Box>
                );
              })
            )}
          </Box>
        </Box>
      </Grid>

      {/* Sidebar - Education & Technologies */}
      <Grid item xs={12} md={4}>
        {/* Education Section */}
        <Box sx={{
          mb: 4,
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
              mb: 2,
              color: 'primary.main',
              fontWeight: 600
            }}
          >
            Education
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {education === null ? (
              <>{loadingSkeleton}</>
            ) : (
              education.map((edu, index) => (
                <Card
                  key={index}
                  elevation={0}
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 2px 8px rgba(33, 150, 243, 0.08)',
                      borderColor: 'primary.main'
                    },
                    border: '1px solid',
                    borderColor: 'rgba(33, 150, 243, 0.08)',
                    background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 50%, #ffffff 100%)',
                    borderRadius: 1.5
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography component="h3" gutterBottom sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '1.1rem', md: '1.3rem' }, }}>
                      {edu.degree}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                      <Typography
                        color="primary"
                        sx={{
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          fontWeight: 600
                        }}
                      >
                        {edu.school}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: '0.7rem', md: '0.85rem' },
                        }}
                      >
                        • {edu.location}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle2"
                      color="text.primary"
                      sx={{
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        fontWeight: 600
                      }}
                    >
                      {edu.year}
                    </Typography>
                    <List sx={{ mt: 1.5, listStyleType: 'disc', pl: 1.5 }}>
                      <ListItem sx={{
                        display: 'list-item',
                        pl: 0,
                        py: 0.25,
                        '&::marker': {
                          color: 'primary.main',
                          fontWeight: 'bold'
                        }
                      }}>
                        <ListItemText
                          primary={edu.description}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.85rem',
                              lineHeight: 1.5,
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              ))
            )}
          </Box>
        </Box>

        {/* Technologies Section */}
        <Box sx={{
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
              mb: 2,
              color: 'primary.main',
              fontWeight: 600
            }}
          >
            Technologies
          </Typography>

          <Paper elevation={0} sx={{
            p: 2.5,
            background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 50%, #ffffff 100%)',
            border: '1px solid',
            borderColor: 'rgba(33, 150, 243, 0.08)',
            borderRadius: 1.5
          }}>
            {technologies === null ? (
              <>{loadingSkeleton}</>
            ) : (
              <>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'text.primary', mb: 1.5, fontSize: '1rem' }}>
                  Frontend
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                  {technologies.frontend.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.75rem',
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
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'text.primary', mb: 1.5, fontSize: '1rem' }}>
                  Backend
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                  {technologies.backend.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      color="secondary"
                      variant="outlined"
                      size="small"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        '&:hover': {
                          backgroundColor: 'secondary.main',
                          color: 'white',
                          transform: 'translateY(-1px)',
                          boxShadow: '0 1px 3px rgba(245, 0, 87, 0.3)'
                        },
                        transition: 'all 0.2s ease'
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'text.primary', mb: 1.5, fontSize: '1rem' }}>
                  Tools & Platforms
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {technologies.tools.map((tool) => (
                    <Chip
                      key={tool}
                      label={tool}
                      color="default"
                      variant="outlined"
                      size="small"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        borderColor: 'rgba(0,0,0,0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.08)',
                          transform: 'translateY(-1px)',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                        },
                        transition: 'all 0.2s ease'
                      }}
                    />
                  ))}
                </Box>
              </>
            )}
          </Paper>
        </Box>
      </Grid>

      {/* Extracurricular Section - Full Width */}
      <Grid item xs={12}>
        <Box sx={{
          mt: { xs: 4, md: 6 },
          pt: { xs: 3, md: 4 },
          borderTop: '2px solid',
          borderColor: 'primary.main',
          background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.02) 0%, rgba(33, 150, 243, 0.03) 100%)',
          borderRadius: 2,
          p: { xs: 2, md: 3 }
        }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              mb: 2,
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: 600
            }}
          >
            Extracurricular Activities
          </Typography>

          {/* Category Filter */}
          <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 0.75, justifyContent: 'center' }}>
            {categories.map((category) => (
              <Chip
                key={category.key}
                icon={category.icon}
                label={category.label}
                onClick={() => setSelectedCategory(category.key)}
                color={selectedCategory === category.key ? 'primary' : 'default'}
                variant={selectedCategory === category.key ? 'filled' : 'outlined'}
                size="small"
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  p: 2,
                  fontSize: '0.75rem',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: 1,
                    backgroundColor: selectedCategory === category.key ? 'primary.main' : 'rgba(33, 150, 243, 0.08)'
                  }
                }}
              />
            ))}
          </Box>

          {/* Extracurricular Cards */}
          <Grid container spacing={2}>
            {extracurriculars === null ? (
              <Grid item xs={12}>
                {loadingSkeleton}
              </Grid>
            ) : (
              filteredExtracurriculars?.map((activity) => (
                <Grid item xs={12} sm={6} lg={4} key={activity.id}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.01)',
                        boxShadow: '0 6px 16px rgba(33, 150, 243, 0.12), 0 2px 6px rgba(0,0,0,0.08)',
                        borderColor: 'primary.main',
                        '& .activity-icon': {
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
                    }}
                    onClick={() => handleExtracurricularToggle(activity.id)}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Box sx={{
                            fontSize: '1.5rem',
                            color: 'primary.main',
                            transition: 'all 0.3s ease',
                            className: 'activity-icon',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(33, 150, 243, 0.08)',
                            '&:hover': {
                              backgroundColor: 'rgba(33, 150, 243, 0.12)'
                            }
                          }}>
                            {activity.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" component="h3" sx={{
                              color: 'text.primary',
                              fontWeight: 600,
                              mb: 0.25,
                              fontSize: '1rem'
                            }}>
                              {activity.title}
                            </Typography>
                            <Typography variant="subtitle2" sx={{
                              color: 'text.primary',
                              fontWeight: 600,
                              fontSize: '0.8rem'
                            }}>
                              {activity.year}
                            </Typography>
                          </Box>
                        </Box>
                        <IconButton
                          size="small"
                          sx={{
                            color: 'primary.main',
                            backgroundColor: 'rgba(33, 150, 243, 0.08)',
                            width: 32,
                            height: 32,
                            '&:hover': {
                              backgroundColor: 'rgba(33, 150, 243, 0.12)',
                              transform: 'scale(1.05)'
                            },
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {activity.expanded ? <FaChevronUp /> : <FaChevronDown />}
                        </IconButton>
                      </Box>

                      <Typography variant="body2" sx={{
                        mb: 1.5,
                        color: 'text.secondary',
                        lineHeight: 1.5,
                        fontSize: '0.85rem'
                      }}>
                        {activity.description}
                      </Typography>

                      <Collapse in={activity.expanded}>
                        <Box sx={{
                          mt: 2,
                          pt: 2,
                          borderTop: '1px solid',
                          borderColor: 'rgba(33, 150, 243, 0.12)',
                          backgroundColor: 'rgba(33, 150, 243, 0.02)',
                          borderRadius: 1,
                          p: 2,
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -0.5,
                            left: 16,
                            right: 16,
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent 0%, #2196f3 50%, transparent 100%)'
                          }
                        }}>
                          <Typography variant="subtitle2" sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: 'text.primary',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            fontSize: '0.9rem'
                          }}>
                            <FaTrophy style={{ color: '#2196f3', fontSize: '1rem' }} />
                            Key Achievements:
                          </Typography>
                          <List dense sx={{ mb: 2 }}>
                            {activity.achievements.map((achievement, idx) => (
                              <ListItem key={idx} sx={{
                                py: 0.25,
                                px: 0,
                                '&::before': {
                                  content: '"•"',
                                  color: 'primary.main',
                                  fontWeight: 'bold',
                                  marginRight: 0.5,
                                  fontSize: '1rem'
                                }
                              }}>
                                <ListItemText
                                  primary={achievement}
                                  sx={{
                                    '& .MuiListItemText-primary': {
                                      fontSize: '0.8rem',
                                      color: 'text.secondary',
                                      lineHeight: 1.4
                                    }
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>

                          <Typography variant="subtitle2" sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: 'text.primary',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            fontSize: '0.9rem'
                          }}>
                            <FaBrain style={{ color: '#2196f3', fontSize: '1rem' }} />
                            Skills Developed:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {activity.skills.map((skill) => (
                              <Chip
                                key={skill}
                                label={skill}
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
                        </Box>
                      </Collapse>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Experience
