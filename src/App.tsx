import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, About, Project, News, Curriculo } from './pages'
import { useLanguage } from './context'

function App() {
  const { language } = useLanguage(); // 👈 importa o idioma

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project key={language} />} /> {/* 👈 força recriação */}
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
    </Router>
  )
}

export default App
