import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="navbar-title" to="/">Blogify</Link>

            <Link className="new-blog" to="/create">Add new blog</Link>
            <Link className="contact" to="/contact">Contact</Link>
        </div>
    );
}
 
export default Navbar;