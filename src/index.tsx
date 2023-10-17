import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import './index.css'
import CityDetail from './pages/CityDetail';
import NavBar from './components/NavBar';
import ProductDetail from './pages/ProductDetail';

const routerObj =
<BrowserRouter>
<NavBar></NavBar>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/cityDetail/:data' element={<CityDetail />} />
    <Route path='/productDetail/:pid' element={<ProductDetail />} />
    <Route path='/settings' element={<Settings />} />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(routerObj);
