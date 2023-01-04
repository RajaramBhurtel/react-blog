import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Raja");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setAuthor(localStorage.getItem("author"));
        setBody(localStorage.getItem("body"));
        setTitle(localStorage.getItem("title"));
    }, []);


  const handleClick = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Blog successfully updated.");
      navigate(-1);
    });
  };

  return (
    <div className="create">
      <h2>Blog Editor</h2>
        <form onSubmit={handleClick}>
          <label> Blog Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label> Blog Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
          <label>Blog Author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Sabin">Sabin</option>
            <option value="Raja">Raja</option>
            <option value="Ram">Ram</option>
          </select>
          <button>Update</button>
        </form>
    </div>
  );
};

export default EditBlog;
