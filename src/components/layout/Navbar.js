import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark p-1 mb-5">
            <Link to="/" className="navbar-brand mx-auto brand">Gif<span className="neon">oogle</span> </Link>
        </nav>
    )
}

export default Navbar
