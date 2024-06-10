import './App.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About/'
import Logement from './pages/Logements/';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

const root = ReactDOM.createRoot( document.getElementById('root'));
 root.render(
 <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement" element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
 
);