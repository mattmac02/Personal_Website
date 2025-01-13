import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';

const fetchProjectsData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    title: 'Project 1',
    description: 'A modern web application built with React and TypeScript',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Project 2',
    description: 'Full-stack application with real-time features',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Project 3',
    description: 'Mobile-first responsive design project',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  }
]), 250));

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    fetchProjectsData().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {loading ? (
            [1, 2, 3].map((index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <CardContent>
                    <Skeleton variant="text" width="80%" height={40} />
                    <Skeleton variant="text" width="60%" height={30} sx={{ mt: 1 }} />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
