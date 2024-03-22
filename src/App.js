import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginAndSignin/Login";
import Signin from "./pages/LoginAndSignin/Signin";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
