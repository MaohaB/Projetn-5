import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/';
import Logement from './pages/Logements/';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="body"> 
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
      </Routes>
      </main>

      </div>
    
      <Footer/>
    </div>
  )
}

export default App;

