import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div className="auth">
      <div className="auth-item">
        <div className="card">
          <h3>Login Pages</h3>
          <form action="">
            <div className="mb-3">
              <input type="email" className="form" placeholder="Email" />
            </div>
            <div className="mb-2">
              <input type="password" className="form" placeholder="Password" />
            </div>
            <NavLink to="/forgot-password" className="forgot">
              Forgot Password?
            </NavLink>
            <button className="btn">Submit</button>
            <h5>
              Don't have account yet? <NavLink to="/register">Sign Up!</NavLink>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}
