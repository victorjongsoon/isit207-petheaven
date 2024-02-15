import React from 'react';
import './App.css';
import NavBar from './pages/navbar';
import Home from './pages/home';
import AdoptionGallery from './pages/gallery';
import Release from './pages/release';
import Login from './pages/login';
import Register from './pages/register';
import Footer from './pages/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/isit207-petheaven">
      <div>
        <NavBar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<AdoptionGallery />} /> 
          <Route path="/release" element={<Release />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Define other routes here */}
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
