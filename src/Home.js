import { useState } from 'react';

const Home = () => {
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
    </div>
  );
}
 
export default Home;


