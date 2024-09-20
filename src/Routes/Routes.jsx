import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import AdminLogin from '../pages/Dashboard/AdminLogin';
import Footer from '../components/Footer/Footer';

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes (with Header) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer/>
            </>
          }
        />

        {/* Admin routes (without Header) */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
