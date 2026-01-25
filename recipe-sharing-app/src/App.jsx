import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // Import the new SearchBar

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        </nav>
        
        <h1>Recipe Manager</h1>
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <AddRecipeForm />
                <hr style={{ margin: '20px 0' }} />
                <SearchBar /> {/* SearchBar added here */}
                <RecipeList />
              </>
            } 
          />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;