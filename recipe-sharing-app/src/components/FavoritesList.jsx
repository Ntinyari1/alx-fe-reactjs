import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  // Map favorite IDs to actual recipe objects
  const favorites = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id)).filter(Boolean)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? <p>No favorites added yet.</p> : null}
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;