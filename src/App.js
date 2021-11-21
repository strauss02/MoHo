import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1> MoHo</h1>
      <nav className="border-2 border-red-200">
        <Link to="/leonardo"> Leonardo </Link> |{' '}
        <Link to="/orchidea"> Orchidea </Link>
      </nav>
    </div>
  )
}

export default App
