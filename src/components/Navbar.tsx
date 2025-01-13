import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
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
          keepMounted: true,
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