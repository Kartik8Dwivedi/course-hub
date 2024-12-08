import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Home/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

