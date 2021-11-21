import './App.css'
import { Link, Outlet } from 'react-router-dom'
import HotelsGallery from './components/HotelsGallery'

function App() {
  return (
    <div className="App bg-yellow-50 min-h-screen flex flex-col items-center">
      <h1> MoHo</h1>
      <main className="flex flex-col items-center bg-pink-100 min-h-screen w-full max-w-xl">
        <nav className="border-2 border-red-200">
          <Link to="/hotels"> Hotels </Link> |{' '}
          <Link to="/orchidea"> Orchidea </Link>
        </nav>
        <Outlet />
        <HotelsGallery />
      </main>
    </div>
  )
}

export default App
