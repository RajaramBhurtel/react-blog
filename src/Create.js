import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("Sabin");
    

    return (
      <div className="create">
        <h2>Add a new blog</h2>
        <form action="">
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
          <select 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Sabin">Sabin</option>
            <option value="Raja">Raja</option>
            <option value="Ram">Ram</option>
          </select>
          <button>Add Blog</button>
          <p>
            {title} {body} {author}
          </p>
        </form>
      </div>
    );
}
 
export default Create;