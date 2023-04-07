import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Test from './Test';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Protected from './Protected';
import { Base64 } from 'js-base64';
import Home from './Views/Home/Home';

function isTokenExpired(token) {
  try {
    // Décoder le token pour récupérer les données de payload
    const payload = JSON.parse(Base64.decode(token.split(".")[1]));
    // Récupérer la propriété 'exp' qui contient un timestamp
    const expiresAt = payload.exp;
    // Transformer le timestamp en date
    const expirationDate = new Date(expiresAt * 1000);
    // Vérifier si la date d'expiration est supérieure à l'heure actuelle
    return expirationDate < new Date();
  } catch (err) {
    console.error(err);
    return true;
  }
}

function ProtectedRoute({children}){
  const token = localStorage.getItem("access_token");
  if(token === null || isTokenExpired(token)){
    return(<Navigate to="/login"></Navigate>)
  }
  return children;
}

function RoleRouting({artisan_children}, {user_children}){

}

function App() {
 
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/protected" element={<ProtectedRoute><Protected /></ProtectedRoute>} />
    <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
    <Route path="/" element={<Home />} exact />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
