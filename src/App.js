import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./pages/HomePage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
