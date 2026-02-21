import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
import './App.css';

// 1. Initialize the QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // 2. Wrap your application in the Provider
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>ALX React Query Demo</h1>
        
        <div className="card">
          <p>
            This app uses <strong>React Query</strong> to manage API state.
          </p>
        </div>

        {/* 3. Render your data fetching component */}
        <PostsComponent />
        
      </div>
    </QueryClientProvider>
  );
}

export default App;