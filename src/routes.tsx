import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css'

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path='*' element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
