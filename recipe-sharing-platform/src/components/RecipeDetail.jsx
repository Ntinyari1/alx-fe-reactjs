import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-sm" 
        />
        
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <p className="text-gray-700 text-lg mb-6 italic">{recipe.summary}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ingredients Section */}
            <section className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-3 text-orange-600 border-b-2 border-orange-100 pb-1">Ingredients</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                {recipe.ingredients?.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </section>

            {/* Instructions Section */}
            <section className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-3 text-green-600 border-b-2 border-green-100 pb-1">Instructions</h2>
              <div className="text-gray-800 leading-relaxed">
                {/* Rendering the instructions from the JSON */}
                {recipe.instructions}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;