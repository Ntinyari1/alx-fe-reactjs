import { useContext } from 'react';
import UserContext from '../UserContext'; // Go up one folder to find the context

function UserProfile() {
  // Pull the data from UserContext
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;