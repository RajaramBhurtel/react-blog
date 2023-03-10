import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    const handleDelete = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(()=>{
        navigate('/');
      });
    }

    return (
      <div className="blog-details">
        {/* <h2>Blog Details -{id}</h2> */}
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blog && (
          <article>
            <Link to={`/blogs/edit/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by: {blog.author}</p>
              <div>{blog.body}</div>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </article>
        )}
      </div>
    );
}
 
export default BlogDetails;