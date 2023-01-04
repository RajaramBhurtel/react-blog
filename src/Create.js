import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("Sabin");
    const [isPending, setIsPending] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);
        setIsPending(true);
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added.');
            setIsPending(false);
        })
    }

    return (
      <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
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
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Ading new blog...</button>}
          {/* <p>
            {title} {body} {author}
          </p> */}
        </form>
      </div>
    );
}
 
export default Create;