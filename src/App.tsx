import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, About, Project, News, Curriculo} from './pages'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
    </Router>
  )
}

export default App
