import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

export default function CartShooping() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasCart" aria-labelledby="offcanvasRightLabel">
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', alignItems: 'center', borderBottom: '1px solid #cccccc' }}>
        <h5 style={{ marginBottom: '0px' }}>Item added to your cart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div className="canvas-cart">
          <div className="canvas-cart-items">
            <div className="img-items">
              <img src="/produk/image 4.png" alt="" />
            </div>
            <div className="desc">
              <h5>Dress Navy</h5>
              <span className="varian">
                <b>Color:</b> Blue
              </span>
              <div className="price">Rp 80,000 IDR</div>
              <div className="min-plus">
                <FaMinus />
                <span>1</span>
                <FaPlus />
                <a className="remove-cart">Remove</a>
              </div>
            </div>
          </div>
          <div className="canvas-cart-items">
            <div className="img-items">
              <img src="/produk/image 5.png" alt="" />
            </div>
            <div className="desc">
              <h5>Jacket Desert Green</h5>
              <span className="varian">
                <b>Color:</b> Blue
              </span>
              <div className="price">Rp 200,000 IDR</div>
              <div className="min-plus">
                <FaMinus />
                <span>1</span>
                <FaPlus />
                <a className="remove-cart">Remove</a>
              </div>
            </div>
          </div>
          <div className="canvas-cart-items">
            <div className="img-items">
              <img src="/produk/image 7.png" alt="" />
            </div>
            <div className="desc">
              <h5>Jacket Japan Round</h5>
              <span className="varian">
                <b>Color:</b> Blue
              </span>
              <div className="price">Rp 8,000,000 IDR</div>
              <div className="min-plus">
                <FaMinus />
                <span>1</span>
                <FaPlus />
                <a className="remove-cart">Remove</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
