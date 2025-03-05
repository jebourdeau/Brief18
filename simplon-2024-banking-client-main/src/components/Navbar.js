import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
    <h2 className="nav-brand">Finance Tracker</h2>
      <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className={isActive('/')} title='transactions'>Transactions</Link>
        <Link to="/categories" className={isActive('/categories')} title='catégories'>Categories</Link>
        <Link to="/payment-methods" className={isActive('/payment-methods')} title='mode de payement'>Payment Methods</Link>
      </div>
      <button onClick={logout} title='déconnexion'>Logout</button>
    </nav>
  </>
  );
}
