import React from 'react';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';

const Navbar = function (){
    return(

        <nav className='nav'>
            <h1><Link className="sub" to='/' element={<LandingPage />}> P </Link></h1>
            <ul>
                <li><button className='btn'><Link className="sub" to='/login' element={<LoginPage />}>Log In</Link></button></li>
            </ul>

        </nav>
    );
}

export default Navbar;