import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components"
import { Home, About, Service, Blog, Privacy, Contact } from "./pages"
import './styles/App.scss'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
