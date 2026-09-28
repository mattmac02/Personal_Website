import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
