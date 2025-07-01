import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-black">
        <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App