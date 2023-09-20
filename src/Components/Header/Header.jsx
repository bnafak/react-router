import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
            
                <span>My Website</span>
                <h1>Module 45-8 pending</h1>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
               {/* <Link to="/users">Users</Link> */}
               <Link to="/posts">Posts:</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            
            </nav>
        </div>
    );
};

export default Header;