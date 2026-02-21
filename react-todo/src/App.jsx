import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo Application</h1>
      </header>
      <main>
        {/* Integrating the TodoList component */}
        <TodoList />
      </main>
      <footer>
        <p>© 2026 React Todo Project</p>
      </footer>
    </div>
  );
}

export default App;