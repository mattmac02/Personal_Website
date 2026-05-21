import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'

function App() {
  return (
    <div className="min-h-screen text-zinc-100 antialiased">
      <AmbientBackground />
      <Navbar />
      <main className="relative">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
