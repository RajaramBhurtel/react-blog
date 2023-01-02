const Home = () => {
    const handleClick = (e) =>{
        console.log('clicked', e);
    }
    const handleClickAgain = (name) =>{
        console.log('clicked by ' + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/* button click with anyonomous function */}
            <button onClick={() =>{
                handleClickAgain("Sabin");
            }}>Click me again</button>
        </div>
     );
}
 
export default Home;


