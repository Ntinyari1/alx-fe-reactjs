import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState([]);

  // Step 2: Validation Logic
  const validate = () => {
    const newErrors = [];
    if (!title) newErrors.push("Title is required.");
    if (!ingredients) newErrors.push("Ingredients are required.");
    // Checking if ingredients have at least two items (separated by commas or new lines)
    if (ingredients && ingredients.split(/[\n,]+/).filter(item => item.trim()).length < 2) {
      newErrors.push("Please include at least two ingredients.");
    }
    if (!steps) newErrors.push("Preparation steps are required.");
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", { title, ingredients, steps });
      // Reset form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors([]);
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add a New Recipe</h2>
      
      {/* Error Messages Section */}
      {errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {errors.map((error, index) => <p key={index}>{error}</p>)}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Grandma's Apple Pie"
          />
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Ingredients (one per line)</label>
          <textarea 
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingredient 1, Ingredient 2..."
          />
        </div>

        {/* Preparation Steps Textarea */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
          <textarea 
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="6"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Step 1: Preheat oven..."
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full md:w-32 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 font-bold"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;