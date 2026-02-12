import React, { useState } from 'react'; // Remove useEffect
import recipeData from '../data.json';

interface Recipe {
  id: number;
  title: string;
  summary: string;
  image: string;
}

const HomePage: React.FC = () => {
  // Initialize state directly with the imported data
  const [recipes] = useState<Recipe[]>(recipeData as Recipe[]);

  // useEffect is no longer needed for static data loading
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Recipe Sharing Platform
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">{recipe.summary}</p>
              <button className="mt-4 text-orange-600 font-medium hover:text-orange-700">
                View Recipe →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;