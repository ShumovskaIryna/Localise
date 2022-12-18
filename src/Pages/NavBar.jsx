import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
 return (
    <nav className='categories'>
        <ul>
            <li className='element'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='element'>
                <NavLink to="/about">About</NavLink>
            </li>
            <li className='element'>
                <NavLink to="/posts">Blog</NavLink>
            </li>
        </ul>
    </nav>
 );
};

export default NavBar;