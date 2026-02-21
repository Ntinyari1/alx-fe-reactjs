import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // useQuery(UniqueKey, FetchFunction)
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  // Handle Loading State
  if (isLoading) return <p>Loading posts...</p>;

  // Handle Error State
  if (isError) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h2>Fetched Posts</h2>
      {/* Step 3: Button to trigger manual refetch */}
      <button onClick={() => refetch()} style={{ marginBottom: '20px' }}>
        Refetch Data
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0' }}>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;