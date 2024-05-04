import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function OffcanvasSearch() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasSearch" aria-labelledby="offcanvasRightLabel" style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginRight: '20px' }}>
        <div></div>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div className="canvas-input-search">
          <IoSearch />
          <input type="text" placeholder="Search out product" />
        </div>
      </div>
    </div>
  );
}
