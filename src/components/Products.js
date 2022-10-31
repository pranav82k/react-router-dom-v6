import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../data/fetchedPosts';

// import posts from '../data/postsData';
const Products = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      const data = await fetchPosts();
      setposts(data);
    }
    fetchedData();
  }, []);
  
  return (
    <>
    <h2 style={{ textAlign: "Center"}}>Post List</h2>
    {posts?.map(post => (
      <div key={post?.id}>
        <h5>{post?.title}</h5>
        <h6>{post?.body}</h6>
        <Link to={`/products/${post?.id}`}><span>Details</span></Link>
      </div>
    ))}
    </>
  )
}

export default Products