
import React, { useContext } from 'react';
import { Button, ButtonToolbar, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div >
            <nav className="navbar navbar-expand-md  ">
                <ul className="logo">
                    <li><Link to="/home">City Rider</Link></li>
                </ul> 
                <ul className="navbar-nav nav">
                    <li className="nav-item">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login">login</Link>
                    </li>
                    <li>
                    <p>{loggedInUser.name}</p>
                    </li>
                </ul>    
            </nav>
        </div>
    );
};

export default Header;