import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: "My new blog", body: "lorem ipsum...", author: "Sabin", id: 1 },
      { title: "Cooking blog", body: "lorem ipsum...", author: "Raja", id: 2 },
      { title: "Sports blog", body: "lorem ipsum...", author: "Sanam", id: 3 },
      {
        title: "Politics blog",
        body: "lorem ipsum...",
        author: "Rajendra",
        id: 4,
      },
    ]); 
    
  const handleClick = (e) => {
    console.log("clicked", e);
  };
  const handleClickAgain = (name) => {
    console.log("clicked by " + name);
  };
  // update the state hook i.e use state hook
  //used to change the state and make our program more dynamic
  //useState is a Hook that lets us add React state to function components.
  // let names = "Sabin";

  //Declaring a State Variable
  const [names, setNames] = useState("Sabin");
  const [age, setAge] = useState(25);

  const handleClickAgainPlease = () => {
    // names = "Raja";
    // console.log(names);
    setNames("Raja");
    setAge(33);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {names} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
      {/* button click with anyonomous function */}
      <button
        onClick={() => {
          handleClickAgain("Sabin");
        }}
      >
        Click me again
      </button>
      {/* update the state */}
      <button onClick={handleClickAgainPlease}>Pleass Click Again</button>

        <h2>Lists </h2>
      {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
          </div>
        ))}

    <h2>Defining Components</h2>
      <BlogList blogs={blogs} title="Blog List" />
      {/* reusing components */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Sabin")}
        title="Sabin's Blog"
      />

    </div>
  );
}
 
export default Home;


