import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import Apropos from './pages/apropos';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>
)