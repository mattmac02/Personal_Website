// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Linkedin, Github } from 'lucide-react';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <AppBar position="static" color="transparent" elevation={1}>
//       <Toolbar sx={{ p: 4, display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Button
//             color={isActive('/') ? 'primary' : 'inherit'}
//             onClick={() => navigate('/')}
//           >
//             About
//           </Button>
//           <Button
//             color={isActive('/projects') ? 'primary' : 'inherit'}
//             onClick={() => navigate('/projects')}
//           >
//             Projects
//           </Button>
//           <Button
//             color={isActive('/experience') ? 'primary' : 'inherit'}
//             onClick={() => navigate('/experience')}
//           >
//             Experience
//           </Button>
//         </Box>

//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <Typography 
//             variant="h6" 
//             component="div" 
//             onClick={() => navigate('/')}
//             sx={{ 
//               cursor: 'pointer',
//               '&:hover': {
//                 opacity: 0.8,
//               },
//             }}
//           >
//             Matthew MacEachern
//           </Typography>
//            <Box sx={{ display: 'flex', gap: 3 }}>
//               <Github 
//                 size={24} 
//                 className="cursor-pointer hover:text-primary-main transition-colors"
//                 onClick={() => window.open('https://github.com/mattmac02', '_blank')}
//               />
//               <Linkedin 
//                 size={24} 
//                 className="cursor-pointer hover:text-primary-main transition-colors"
//                 onClick={() => window.open('https://www.linkedin.com/in/matthew-maceachern/', '_blank')}
//               />
//             </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Github, Linkedin, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'About', path: '/' },
    { text: 'Projects', path: '/projects' },
    { text: 'Experience', path: '/experience' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          key={item.path}
          onClick={() => {
            navigate(item.path);
            handleDrawerToggle();
          }}
          sx={{
            color: isActive(item.path) ? 'primary.main' : 'inherit',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <Typography variant="button">{item.text}</Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Matthew MacEachern
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              color={isActive(item.path) ? 'primary' : 'inherit'}
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;