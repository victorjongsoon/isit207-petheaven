import React from 'react';
import './App.css';
import NavBar from './pages/navbar';
import Home from './pages/home';
import AdoptionGallery from './pages/gallery';
import Release from './pages/release';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/isit207-petheaven">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<AdoptionGallery />} /> 
          <Route path="/release" element={<Release />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Define other routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
