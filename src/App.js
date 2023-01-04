import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = "Welcome to my blog"
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{title }</h1> */}
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
