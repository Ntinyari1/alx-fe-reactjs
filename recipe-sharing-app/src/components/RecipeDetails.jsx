import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const id = Number(recipeId);
  
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const isFavorite = useRecipeStore(state => state.favorites.includes(id));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      {/* Toggle Favorite Button */}
      <button onClick={() => isFavorite ? removeFavorite(id) : addFavorite(id)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <hr />
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;