import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites);

  // Re-generate recommendations whenever the user's favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length === 0 ? <p>Add more favorites to see suggestions!</p> : null}
      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ backgroundColor: '#f9f9f9', padding: '10px', margin: '10px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;