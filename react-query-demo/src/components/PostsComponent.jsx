import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', 
    fetchPosts, 
    {
      // The data is considered "fresh" for 5 minutes (won't re-fetch automatically)
      staleTime: 300000, 
      
      // The data stays in the cache for 10 minutes after being unused
      cacheTime: 600000, 
      
      // Prevents automatic re-fetching when the user switches browser tabs
      refetchOnWindowFocus: false, 
      
      // Useful for pagination: shows old data while fetching new data
      keepPreviousData: true, 
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h2>Fetched Posts (Optimized)</h2>
      <button onClick={() => refetch()} style={{ marginBottom: '20px' }}>
        Force Refetch
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: '15px', borderBottom: '1px solid #eee' }}>
            <h4 style={{ margin: '0' }}>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;