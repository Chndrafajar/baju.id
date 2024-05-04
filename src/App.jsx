import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import DetailPages from './pages/DetailPages';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Loading from './components/Loading';
import CartShooping from './components/CartShooping';
import ProdukPages from './pages/ProdukPages';
import HomePages from './pages/HomePages';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const handleRouteChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    handleRouteChange();
  }, [location]);

  return (
    <>
      {isLoading && <Loading />}

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/product" element={<ProdukPages />} />
        <Route path="/detail/:id" element={<DetailPages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <CartShooping />
    </>
  );
}

export default App;
