import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <Link to="/listBooking">ListBooking</Link>
      <Link to="/listSubscribers">ListSubscribers</Link>
      <Link to="/">Logout</Link>
      
    </div>
  );
}

export default Sidebar;
