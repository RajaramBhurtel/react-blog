import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs (newBlogs);
    // }

    //using custom hook useFetch to get the datas
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
    
    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="Blog List" />}
      </div>
    );
}
 
export default Home;


