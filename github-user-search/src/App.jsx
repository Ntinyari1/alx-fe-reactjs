import { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // This is where we will call our GitHub service later
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
      </header>
      
      <main>
        <form onSubmit={handleSearch} style={{ margin: '20px' }}>
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '10px', width: '250px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>
            Search
          </button>
        </form>

        <div className="results-container">
          <p>Search results will appear here.</p>
        </div>
      </main>
    </div>
  );
}

export default App;