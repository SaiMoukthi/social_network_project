
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Chat from './pages/Chat';
import './styles.css';

function App(){ return (
  <BrowserRouter>
    <nav className="nav"><Link to="/">Home</Link> | <Link to="/chat">Chat</Link> | <Link to="/auth">Auth</Link></nav>
    <Routes><Route path="/" element={<Home/>} /><Route path="/auth" element={<Auth/>} /><Route path="/chat" element={<Chat/>} /></Routes>
  </BrowserRouter>
)}
createRoot(document.getElementById('root')).render(<App/>);
