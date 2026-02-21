import { Navigate } from 'react-router-dom';

// Simulated authentication hook
const useAuth = () => {
  // Change to 'true' to simulate a logged-in user
  const isAuthenticated = false; 
  return { isAuthenticated };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;