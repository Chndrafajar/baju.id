import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularProduk from '../components/PopularProduk';
import Produk from '../components/Produk';
import TentangKami from '../components/TentangKami';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProdukPages = () => {
  return (
    <>
      <Navbar />
      <div className="produk-pages">
        <Produk />
      </div>
      <Footer />
    </>
  );
};

export default ProdukPages;
