import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        </nav>
        
        <h1>Recipe Sharing Application</h1>
        
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', gap: '40px' }}>
              <div style={{ flex: 2 }}>
                <AddRecipeForm />
                <hr style={{ margin: '20px 0' }} />
                <SearchBar />
                <RecipeList />
              </div>
              <div style={{ flex: 1, borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
                <FavoritesList />
                <hr style={{ margin: '20px 0' }} />
                <RecommendationsList />
              </div>
            </div>
          } />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;