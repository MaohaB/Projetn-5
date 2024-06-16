import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/';
import Logements from './pages/Fichelogement';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from './components/Error'



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
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      </main>

      </div>
    
      <Footer/>
    </div>
  )
}

export default App;

