//props uses

// const BlogList = (props) => {
// distructuring the props
const BlogList = ({ blogs }) => {
    // const blogs = props.blogs;

    return (
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
          </div>
        ))}
      </div>
    );
}
 
export default BlogList;