import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Software from './pages/Software'
import People from './pages/People'
import JoinLab from './pages/JoinLab'
import Contact from './pages/Contact'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/software" element={<Software />} />
            <Route path="/people" element={<People />} />
            <Route path="/join" element={<JoinLab />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
