import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ onSearchPerformed }) => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset states before starting a new search
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
            
            // Call the parent callback if it exists
            if (onSearchPerformed) {
                onSearchPerformed(username);
            }
        } catch (err) {
            // Fix: We now log the error so the 'err' variable is used
            console.error("Fetch Error:", err.message);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container" style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: '10px', width: '250px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>
                    Search
                </button>
            </form>

            {/* Conditional Rendering Logic */}
            {loading && <p>Loading...</p>}
            
            {error && <p>Looks like we cant find the user</p>}

            {userData && (
                <div className="user-card" style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <img 
                        src={userData.avatar_url} 
                        alt={userData.login} 
                        style={{ width: '150px', borderRadius: '50%', marginBottom: '15px' }} 
                    />
                    <h2>{userData.name || userData.login}</h2>
                    <p style={{ fontStyle: 'italic', color: '#555' }}>{userData.bio}</p>
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>
                            View GitHub Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;