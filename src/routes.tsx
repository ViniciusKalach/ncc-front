import {BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShowcasePage from './pages/ShowcasePage';
import './App.css'

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/vitrine" element={<ShowcasePage />} />
        <Route path='*' element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
