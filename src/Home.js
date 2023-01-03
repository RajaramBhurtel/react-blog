import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new blog', body: 'lorem ipsum...', author: 'Sabin', id: 1},
        {title: 'Cooking blog', body: 'lorem ipsum...', author: 'Raja', id: 2},
        {title: 'Sports blog', body: 'lorem ipsum...', author: 'Sanam', id: 3},
        {title: 'Politics blog', body: 'lorem ipsum...', author: 'Sabin', id: 4}
    ]); 

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs (newBlogs);
    }
    return (
      <div className="home">
        <BlogList blogs={blogs} title="Blog List" handleDelete={handleDelete}/>
      </div>
    );
}
 
export default Home;


