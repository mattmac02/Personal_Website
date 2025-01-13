// import { Container, Typography, Box, Grid, Card, CardContent, Chip, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';
// import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

// const experiences = [
//   {
//     year: '2023',
//     title: 'Senior Developer',
//     company: 'Tech Corp',
//     description: [
//       'Led development of enterprise applications',
//       'Collaborated with cross-functional teams to design scalable systems',
//       'Mentored junior developers and conducted code reviews',
//     ],
//   },
//   {
//     year: '2021',
//     title: 'Full Stack Developer',
//     company: 'Digital Solutions',
//     description: [
//       'Developed and maintained multiple client projects',
//       'Integrated third-party APIs to enhance platform functionality',
//       'Optimized application performance and debugging issues',
//     ],
//   },
//   {
//     year: '2019',
//     title: 'Junior Developer',
//     company: 'StartUp Inc',
//     description: [
//       'Started career in web development',
//       'Assisted in developing and testing front-end features',
//       'Collaborated with senior developers to learn best practices',
//     ],
//   },
//   {
//     year: '2022',
//     title: 'Fellow',
//     company: `Cansbridge Fellowship`,
//     description: [
//       `Selected as one of 27 students out of 1000+ applicants (~3% acceptance rate) awarded a $10,000 grant and invited to
// become a Fellow. Used the grant to pursue an engineering internship in Asia.`
//     ]
//   },
// ];

// const education = [
//   {
//     year: '2020 - 2024',
//     degree: 'Bachelor of Applied Science in Computer Engineering',
//     school: `Queen's University`,
//     description: `Graduated with Dean's List Honors, specialized in Software Engineering`
//   },
// ];

// const technologies = {
//   frontend: ['React', 'TypeScript', 'Material-UI', 'NextJS', 'CSS3', 'HTML5'],
//   backend: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
//   tools: ['Git', 'Docker', 'AWS', 'Jenkins', 'Jira']
// };

// const Experience = () => {
//   return (
//     <Grid container spacing={4} sx={{ py: 8, px: 16 }}>
//       {/* Left Panel - Work Experience */}
//       <Grid item xs={12} md={8}>
//         <Typography variant="h2" component="h1" gutterBottom>
//           Experience
//         </Typography>
//         <Timeline position="alternate">
//           {experiences.map((exp, index) => (
//             <TimelineItem key={index}>
//               <TimelineSeparator>
//                 <TimelineDot color="primary" />
//                 {index < experiences.length - 1 && <TimelineConnector />}
//               </TimelineSeparator>
//               <TimelineContent>
//                 <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
//                   <Typography variant="h6" component="h3">
//                     {exp.title}
//                   </Typography>
//                   <Typography color="primary">{exp.company}</Typography>
//                   <Typography variant="subtitle2" color="text.secondary">
//                     {exp.year}
//                   </Typography>

//                   {/* Description with Bullet Points */}
//                   {exp.description.length > 0 ? (
//                     <List sx={{ mt: 1 }}>
//                       {exp.description.map((desc, idx) => (
//                         <ListItem key={idx}>
//                           <ListItemText primary={desc} />
//                         </ListItem>
//                       ))}
//                     </List>
//                   ) : (
//                     <Typography variant="body2" sx={{ mt: 1 }}>
//                       No description provided.
//                     </Typography>
//                   )}
//                 </Box>
//               </TimelineContent>
//             </TimelineItem>
//           ))}
//         </Timeline>
//       </Grid>

//       {/* Right Panel - Education and Technologies stacked vertically */}
//       <Grid item xs={12} md={4}>
//         {/* Education Section */}
//         <Box sx={{ mb: 6 }}>
//           <Typography variant="h2" component="h1" gutterBottom>
//             Education
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             {education.map((edu, index) => (
//               <Card key={index} elevation={3}>
//                 <CardContent>
//                   <Typography variant="h5" component="h3" gutterBottom>
//                     {edu.degree}
//                   </Typography>
//                   <Typography variant="h6" color="primary" gutterBottom>
//                     {edu.school}
//                   </Typography>
//                   <Typography variant="subtitle1" color="text.secondary" gutterBottom>
//                     {edu.year}
//                   </Typography>
//                   <Typography variant="body1">
//                     {edu.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         </Box>

//         {/* Technologies Section */}
//         <Box>
//           <Typography variant="h2" component="h1" gutterBottom>
//             Technologies
//           </Typography>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>Frontend</Typography>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
//               {technologies.frontend.map((tech) => (
//                 <Chip key={tech} label={tech} color="primary" variant="outlined" />
//               ))}
//             </Box>

//             <Typography variant="h6" gutterBottom>Backend</Typography>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
//               {technologies.backend.map((tech) => (
//                 <Chip key={tech} label={tech} color="secondary" variant="outlined" />
//               ))}
//             </Box>

//             <Typography variant="h6" gutterBottom>Tools & Platforms</Typography>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//               {technologies.tools.map((tech) => (
//                 <Chip key={tech} label={tech} color="success" variant="outlined" />
//               ))}
//             </Box>
//           </Paper>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Experience;
import { Typography, Box, Grid, Card, CardContent, Chip, Paper, List, ListItem, ListItemText, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';
interface Experience {
  year: string;
  title: string;
  company: string;
  description: string[];
}

interface Education {
  year: string;
  degree: string;
  school: string;
  description: string;
}

interface Technologies {
  frontend: string[];
  backend: string[];
  tools: string[];
}

const fetchExperienceData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    year: '2023',
    title: 'Senior Developer',
    company: 'Tech Corp',
    description: [
      'Led development of enterprise applications',
      'Collaborated with cross-functional teams to design scalable systems',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    description: [
      'Developed and maintained multiple client projects',
      'Integrated third-party APIs to enhance platform functionality',
      'Optimized application performance and debugging issues',
    ],
  },
  {
    year: '2019',
    title: 'Junior Developer',
    company: 'StartUp Inc',
    description: [
      'Started career in web development',
      'Assisted in developing and testing front-end features',
      'Collaborated with senior developers to learn best practices',
    ],
  },
  {
    year: '2022',
    title: 'Fellow',
    company: `Cansbridge Fellowship`,
    description: [
      `Selected as one of 27 students out of 1000+ applicants (~3% acceptance rate) awarded a $10,000 grant and invited to become a Fellow. Used the grant to pursue an engineering internship in Asia.`
    ]
  },
]), 1500));

const fetchEducationData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    year: '2020 - 2024',
    degree: 'Bachelor of Applied Science in Computer Engineering',
    school: `Queen's University`,
    description: `Graduated with Dean's List Honors, specialized in Software Engineering`
  },
]), 1000));

const fetchTechnologiesData = () => new Promise(resolve => setTimeout(() => resolve({
  frontend: ['React', 'TypeScript', 'Material-UI', 'NextJS', 'CSS3', 'HTML5'],
  backend: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
  tools: ['Git', 'Docker', 'AWS', 'Jenkins', 'Jira']
}), 1000));

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[] | null>(null);
  const [education, setEducation] = useState<Education[] | null>(null);
  const [technologies, setTechnologies] = useState<Technologies | null>(null);
  
  useEffect(() => {
    // Simulate async data fetching
    Promise.all([fetchExperienceData(), fetchEducationData(), fetchTechnologiesData()])
      .then(([expData, eduData, techData]) => {
        setExperiences(expData as Experience[]);
        setEducation(eduData as Education[]);
        setTechnologies(techData as Technologies);
      });
  }, []);

  const loadingSkeleton = (
    <>
      <Skeleton variant="text" width="80%" height={40} />
      <Skeleton variant="text" width="60%" height={30} />
      <Skeleton variant="rectangular" width="100%" height={150} sx={{ mt: 2 }} />
    </>
  );

  return (
    <Grid container spacing={4} sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 16 } }}>
      <Grid item xs={12} md={8}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}
        >
          Experience
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experiences === null ? (
            <>{loadingSkeleton}</>
          ) : (
            experiences.map((exp, index) => (
              <Box 
                key={index} 
                sx={{
                  p: 2, 
                  bgcolor: 'background.paper', 
                  borderRadius: 1, 
                  boxShadow: 1, 
                  mb: { xs: 2, md: 3 }
                }}
              >
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                >
                  {exp.title}
                </Typography>
                <Typography color="primary" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  {exp.year}
                </Typography>
                {exp.description.length > 0 ? (
                  <List sx={{ mt: 1 }}>
                    {exp.description.map((desc, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={desc} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    No description provided.
                  </Typography>
                )}
              </Box>
            ))
          )}
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}
          >
            Education
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {education === null ? (
              <>{loadingSkeleton}</>
            ) : (
              education.map((edu, index) => (
                <Card key={index} elevation={3}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {edu.degree}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {edu.school}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {edu.year}
                    </Typography>
                    <Typography variant="body1">
                      {edu.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </Box>
        </Box>
        <Box>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}
          >
            Technologies
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            {technologies === null ? (
              <>{loadingSkeleton}</>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>Frontend</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {technologies.frontend.map((tech) => (
                    <Chip key={tech} label={tech} color="primary" variant="outlined" />
                  ))}
                </Box>
                <Typography variant="h6" gutterBottom>Backend</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {technologies.backend.map((tech) => (
                    <Chip key={tech} label={tech} color="secondary" variant="outlined" />
                  ))}
                </Box>
                <Typography variant="h6" gutterBottom>Tools & Platforms</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {technologies.tools.map((tool) => (
                    <Chip key={tool} label={tool} color="default" variant="outlined" />
                  ))}
                </Box>
              </>
            )}
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Experience;
