import { useState } from 'react';
import Search from './components/Search';
import './App.css';

function App() {
  // We can keep a global state here if we want to track recent searches
  const [lastSearched, setLastSearched] = useState('');

  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ 
        backgroundColor: '#24292e', 
        padding: '20px', 
        color: 'white', 
        borderRadius: '0 0 8px 8px',
        marginBottom: '30px'
      }}>
        <h1>GitHub User Search</h1>
        <p>Find GitHub profiles quickly and easily</p>
      </header>

      <main>
        {/* The logic for fetching and displaying is now inside this component */}
        <Search onSearchPerformed={(name) => setLastSearched(name)} />
        
        {lastSearched && (
          <p style={{ marginTop: '10px', color: '#666' }}>
            Showing results for: <strong>{lastSearched}</strong>
          </p>
        )}
      </main>

      <footer style={{ 
        marginTop: '40px', 
        padding: '20px', 
        borderTop: '1px solid #eee', 
        textAlign: 'center',
        color: '#888'
      }}>
        <p>&copy; 2026 GitHub User Search App | ALX Professional Foundations</p>
      </footer>
    </div>
  );
}

export default App;