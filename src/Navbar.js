import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link to="/">
          <h1>My new blog</h1>
        </Link>
        {/* // replacing anchor tag with react link */}
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    );
}
 
export default Navbar;