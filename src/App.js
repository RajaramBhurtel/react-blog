import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import New from "./app/store";

function App() {
  // const title = "Welcome to my blog"
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{title }</h1> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<New />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
