import './App.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home/'
import About from './pages/About/'
import Logement from './pages/Fichelogement';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

const root = ReactDOM.createRoot( document.getElementById('root'));
 root.render(
 <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
 
);