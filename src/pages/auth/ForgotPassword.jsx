import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="auth">
      <div className="auth-item">
        <div className="card">
          <h3>Forgot Password</h3>
          <form action="">
            <div className="mb-3">
              <input type="email" className="form" placeholder="Email" />
            </div>
            <div className="mb-1">
              <input type="password" className="form" placeholder="New Password" />
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
