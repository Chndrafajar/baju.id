import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Register() {
  return (
    <div className="auth">
      <div className="auth-item">
        <div className="card">
          <h3>Register Pages</h3>
          <form action="">
            <div className="mb-3" style={{ display: 'flex', gap: '10px' }}>
              <input type="text" className="form" placeholder="First Name" />
              <input type="text" className="form" placeholder="Last Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form" placeholder="Password" />
            </div>
            <button className="btn">Submit</button>
            <h5>
              Have an account? <NavLink to="/login">Log In!</NavLink>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}
