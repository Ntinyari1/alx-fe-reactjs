import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          🍳 RecipeShare
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link 
            to="/add-recipe" 
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;