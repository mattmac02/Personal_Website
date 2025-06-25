import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    h1: {
      fontWeight: 700,
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    h2: {
      fontWeight: 600,
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    h3: {
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    h4: {
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    h5: {
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    h6: {
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    body1: {
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    body2: {
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#333333',
      secondary: '#333333',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App