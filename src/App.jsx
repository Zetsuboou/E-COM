import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './pages/Cart'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
