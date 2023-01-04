import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(true); 

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs (newBlogs);
    // }

    useEffect( () => {
       fetch("http://localhost:8000/blogs")
        .then( response => {
          if( !response.ok ) {
            throw Error('Couldn`t fetch data from the server');
          }
          return response.json();
        })
        .then( (data) => {
          // console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
         setError(err.message);
        });
    }, []);

    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="Blog List" />}
      </div>
    );
}
 
export default Home;


