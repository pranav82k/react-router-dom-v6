import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../data/fetchedPosts';
// import posts from '../data/postsData';

const Product = () => {

  // Set State
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchedData = async () => {
      const data = await fetchPosts();
      setposts(data);
      setLoading(false);
    }
    fetchedData();
  }, []);

  const { id } = useParams();
  // const post = posts?.find(post => post?.id === parseInt(id));
  const post = posts?.find(post => post?.id === +id);
  return (
    <>
      <h2 style={{ textAlign: "center"}}>Product Details</h2>
      {loading ? <h2 style={{ textAlign: "center" }}>Loading....</h2> : post ? (
        <div>
          <h2 style={{ textAlign: "center" }}>{post?.title}</h2>
          <p style={{ textAlign: "center" }}>{post?.body}</p>
        </div>
      ) : <h2 style={{ textAlign: "center", color: "red" }}>No Post Found</h2>
      }
    </>
  )
}

export default Product