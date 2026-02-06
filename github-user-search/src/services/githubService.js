import axios from 'axios';

/**
 * Fetches specific user data from GitHub
 * @param {string} username 
 */
export const fetchUserData = async (username) => {
    // Note: We use the endpoint specified: https://api.github.com/users/{username}
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};