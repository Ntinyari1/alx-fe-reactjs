import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUsers([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            setUsers(data.items || []);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap gap-4 items-end justify-center mb-8"
            >
                <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1 text-gray-600">Username</label>
                    <input
                        type="text"
                        placeholder="e.g. yvonne"
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1 text-gray-600">Location</label>
                    <input
                        type="text"
                        placeholder="e.g. Nairobi"
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1 text-gray-600">Min Repos</label>
                    <input
                        type="number"
                        placeholder="0"
                        className="border border-gray-300 p-2 rounded w-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition-colors"
                >
                    Search
                </button>
            </form>

            {loading && <p className="text-center text-xl font-medium">Loading...</p>}
            
            {error && <p className="text-center text-red-500 font-bold">Looks like we cant find the user</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div key={user.id} className="bg-white border p-6 rounded-xl shadow hover:shadow-xl transition-shadow text-center">
                        <img 
                            src={user.avatar_url} 
                            alt={user.login} 
                            className="w-24 h-24 rounded-full mx-auto border-4 border-blue-100"
                        />
                        <h2 className="mt-4 text-xl font-bold text-gray-800">{user.login}</h2>
                        <div className="mt-4">
                            <a 
                                href={user.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-black transition-colors"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;