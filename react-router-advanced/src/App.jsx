import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile, { ProfileDetails, ProfileSettings } from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/">Home</Link> | {" "}
        <Link to="/profile">Profile (Protected)</Link> | {" "}
        <Link to="/blog/123">Blog Post 123</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div><h1>Home Page</h1><p>Public Content</p></div>} />
        
        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected and Nested Routes */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested children */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;