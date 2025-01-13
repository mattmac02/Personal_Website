import { Container, Typography, Box, Grid, Button, Skeleton } from '@mui/material';
import { Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={5}>
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={300} sx={{ borderRadius: 2 }} />
            ) : (
              <Box
                component="img"
                src="/assets/headshot.jpeg"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                  mb: { xs: 2, md: 0 },
                }}
                alt="Profile"
              />
            )}
          </Grid>
          <Grid item xs={12} md={7}>
            {loading ? (
              <>
                <Skeleton variant="text" width="60%" height={60} sx={{ mb: 2 }} />
                <Skeleton variant="text" width="40%" height={40} sx={{ mb: 3 }} />
                <Skeleton variant="text" width="100%" height={80} sx={{ mb: 4 }} />
              </>
            ) : (
              <>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: { xs: 1, md: 2 },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  ABOUT ME
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    mb: { xs: 2, md: 4 },
                    fontWeight: 500,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  FULL-STACK ENGINEER
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Hi there! I'm Matthew, a recent Computer Engineer graduate from Queen's University. 
                  I am currently Junior Full-Stack Engineer at Pivotal Life Sciences, building out various AI functionalities to streamline the VC process.
                  Previously, I was an AI Engineer for MoneyLion, working on the development of the product's core predictive features through the
                  development of extensive testing procedures and feature extractions. I am passionate about building and improving systems in people's everyday lives
                  through the use of software. Let's get in touch!
                </Typography>
              </>
            )}
            {loading ? (
              <Skeleton variant="rectangular" width={100} height={40} sx={{ mt: 2, mb: 2 }} />
            ) : (
              <Box sx={{ display: 'flex', gap: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Github
                  size={24}
                  className="cursor-pointer hover:text-primary-main transition-colors"
                  onClick={() => window.open('https://github.com/mattmac02', '_blank')}
                />
                <Linkedin
                  size={24}
                  className="cursor-pointer hover:text-primary-main transition-colors"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                />
              </Box>
            )}
            {loading ? (
              <Skeleton variant="text" width="50%" height={30} sx={{ mb: 1 }} />
            ) : (
              <Box sx={{ mt: 3, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Download My Resume
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="/assets/Matthew_Resume.pdf"
                  download="Matthew_Resume.pdf"
                  sx={{
                    textTransform: 'none',
                    px: { xs: 2, md: 3.5 },
                    py: { xs: 0.5, md: 1 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    width: { xs: 'auto', md: 'auto' },
                    mt: 2,
                    marginLeft: { xs: 'auto', md: 0 },
                    marginRight: { xs: 'auto', md: 0 },
                  }}
                >
                  Download Resume
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
