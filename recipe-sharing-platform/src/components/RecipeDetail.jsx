import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe that matches the ID from the URL
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <button 
        onClick={() => navigate('/')}
        className="mb-4 text-blue-600 hover:underline flex items-center"
      >
        ← Back to Home
      </button>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 text-lg mb-6 italic">{recipe.summary}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2">
              {/* Mocking ingredients since they aren't in data.json yet */}
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Instructions</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-800">
              <li>Prepare your ingredients carefully.</li>
              <li>Follow the traditional cooking method.</li>
              <li>Serve hot and enjoy!</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;