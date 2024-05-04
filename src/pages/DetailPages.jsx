import React from 'react';
import { BiSolidStar } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import '../swiper.css';
import { produk } from '../data';
import { NavLink, useParams } from 'react-router-dom';
import { FaEye, FaShoppingBag } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DetailPages = () => {
  const { id } = useParams();
  const product = produk.find((p) => p.id === Number(id));

  return (
    <>
      <Navbar />
      <div className="detailPages">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-7">
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {product.feature.map((img) => (
                  <SwiperSlide>
                    <img src={img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-5">
              <div className="card">
                <h3>{product.name}</h3>
                <div className="info">
                  <div className="infoItems">
                    <div className="star">
                      <div className="itemsStar">
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                      </div>
                      <span>({product.star})</span>
                    </div>
                    <div className="sales">
                      <span>200 sales</span>
                    </div>
                  </div>

                  <div className="price">
                    <h5>Rp {product.price.toLocaleString()} IDR</h5>
                  </div>
                </div>
                <div className="color">
                  <h5>
                    Colour : <span>White</span>
                  </h5>
                  <div className="colorItems">
                    <div className="colorBox white"></div>
                    <div className="colorBox blue"></div>
                    <div className="colorBox red"></div>
                    <div className="colorBox pink"></div>
                  </div>
                </div>
                <div className="size">
                  <h5>Size :</h5>
                  <select name="" id="">
                    <option value="">XL</option>
                    <option value="">M</option>
                    <option value="">XXL</option>
                  </select>
                  <div className="button">
                    <button className="btnPrimary" style={{ width: '100%' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="title">
              <h4>Other Products</h4>
            </div>
          </div>
          <div className="row mt-2">
            {produk.map((p) => (
              <div className="col-sm-6 col-xl-3 col-lg-4 col-6" key={p.id}>
                <div className="card">
                  <img src={p.img} alt="" />
                  <div className="btn-hover">
                    <NavLink to={`/detail/${p.id}`} className="icons">
                      <FaEye />
                    </NavLink>
                    <div className="icons" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                      <FaShoppingBag />
                    </div>
                  </div>
                  <h5>{p.name}</h5>
                  <div className="info">
                    <div className="infoItems">
                      <div className="star">
                        {!isNaN(p.star) && (
                          <div className="itemsStar">
                            {Array(Math.round(p.star))
                              .fill()
                              .map((item, i) => (
                                <BiSolidStar key={p.id} />
                              ))}
                          </div>
                        )}

                        <span>(10)</span>
                      </div>
                      <div className="sales">
                        <span>{p.sales} sales</span>
                      </div>
                    </div>

                    <div className="price">
                      <h5>RP {p.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPages;
