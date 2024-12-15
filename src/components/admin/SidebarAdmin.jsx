// src/components/admin/SidebarAdmin.jsx

import React from "react";
import { Link } from "react-router-dom"; // Jika menggunakan react-router-dom untuk routing

const SidebarAdmin = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-4">
          <Link to="/admin/dashboard" className="text-lg hover:text-blue-500">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="users" className="text-lg hover:text-blue-500">
            Users
          </Link>
        </li>
        <li className="mb-4">
          <Link to="categories" className="text-lg hover:text-blue-500">
            Categories
          </Link>
        </li>
        <li className="mb-4">
          <Link to="service-providers" className="text-lg hover:text-blue-500">
            Services Provider
          </Link>
        </li>
        <li className="mb-4">
          <Link to="services" className="text-lg hover:text-blue-500">
            Service
          </Link>
        </li>
        <li className="mb-4">
          <Link to="transactions" className="text-lg hover:text-blue-500">
            Transaksi
          </Link>
        </li>
        <li className="mb-4">
          <Link to="settings" className="text-lg hover:text-blue-500">
            Settings
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default SidebarAdmin;
