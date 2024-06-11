import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/';
import Logements from './pages/Logements';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logements from './components/Logements';

function App() {
  return (
    <div>
      <div className="body"> 
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logement/:id" element={<Logements />} />
      </Routes>
      </main>

      </div>
    
      <Footer/>
    </div>
  )
}

export default App;

