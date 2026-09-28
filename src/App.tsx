import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen max-w-full overflow-x-clip bg-black">
        <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
