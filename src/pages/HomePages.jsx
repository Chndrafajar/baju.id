import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularProduk from '../components/PopularProduk';
import Produk from '../components/Produk';
import TentangKami from '../components/TentangKami';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePages = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularProduk />
      <Produk />
      <TentangKami />
      <Footer />
    </>
  );
};

export default HomePages;
