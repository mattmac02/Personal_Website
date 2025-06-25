import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const menuItems = [
    { text: 'About', path: '/' },
    { text: 'Projects', path: '/projects' },
    { text: 'Experience', path: '/experience' },
  ]

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.path}
          onClick={() => {
            navigate(item.path)
            handleDrawerToggle()
          }}
          sx={{
            color: isActive(item.path) ? 'primary.main' : 'inherit',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(33, 150, 243, 0.08)',
            },
          }}
        >
          <Typography variant="button">{item.text}</Typography>
        </ListItem>
      ))}
    </List>
  )

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.02) 0%, rgba(33, 150, 243, 0.03) 100%)',
        borderBottom: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            color: 'primary.main',
            fontSize: { xs: '1.1rem', md: '1.3rem' }
          }}
        >
          Matthew MacEachern
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              color={isActive(item.path) ? 'primary' : 'inherit'}
              onClick={() => navigate(item.path)}
              sx={{
                textTransform: 'none',
                fontWeight: isActive(item.path) ? 600 : 500,
                fontSize: '0.9rem',
                px: 2,
                py: 1,
                borderRadius: 1.5,
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: isActive(item.path)
                    ? 'rgba(33, 150, 243, 0.12)'
                    : 'rgba(33, 150, 243, 0.08)',
                  transform: 'translateY(-1px)',
                },
                ...(isActive(item.path) && {
                  backgroundColor: 'rgba(33, 150, 243, 0.08)',
                  border: '1px solid',
                  borderColor: 'rgba(33, 150, 243, 0.2)',
                })
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { sm: 'none' },
            backgroundColor: 'rgba(33, 150, 243, 0.08)',
            '&:hover': {
              backgroundColor: 'rgba(33, 150, 243, 0.12)',
            }
          }}
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
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.02) 0%, rgba(33, 150, 243, 0.03) 100%)',
            borderLeft: '1px solid',
            borderColor: 'rgba(33, 150, 243, 0.08)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default Navbar