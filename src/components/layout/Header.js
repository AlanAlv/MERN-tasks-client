import React from 'react'

const Header = () => {
    return ( 
        <header className="app-header">
            <p className="username">
                Hello <span>Alan</span>
            </p>
            <nav className="nav-main">
                <a href="#!">Sign Out</a>
            </nav>
        </header>
     );
}
 
export default Header;