import React from 'react';
import { BiSolidStar } from 'react-icons/bi';
import { produk } from '../data';
import { FaEye, FaShoppingBag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const PopularProduk = () => {
  return (
    <div className="popular" id="product">
      <div className="container">
        <div className="row">
          <div className="title">
            <h4>Popular</h4>
            <NavLink to="/product">
              Explore Product <div>&gt;</div>
            </NavLink>
          </div>
        </div>
        <div className="row mt-2">
          {produk.slice(4, 8).map((p) => (
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
                    <h5>Rp {p.price.toLocaleString()} IDR</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProduk;
