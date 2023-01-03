import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new blog', body: 'lorem ipsum...', author: 'Sabin', id: 1},
        {title: 'Cooking blog', body: 'lorem ipsum...', author: 'Raja', id: 2},
        {title: 'Sports blog', body: 'lorem ipsum...', author: 'Sanam', id: 3},
        {title: 'Politics blog', body: 'lorem ipsum...', author: 'Rajendra', id: 4}
    ]); 
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;


