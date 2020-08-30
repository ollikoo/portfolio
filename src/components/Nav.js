import React, { useState } from 'react';
import Burger from './Burger';

const Nav = () => {
    
    const [navOpen, setNavOpen] = useState(false);

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

    return (  
        <div className="nav-wrap">
            <header className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm nav-bar__left">
                            <div className="nav-bar__logo"></div>
                        </div>
                        <div className="col-sm nav-bar__right">
                            <div className="nav-bar__menu-trigger">
                                <Burger handleClick={handleNav} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className={navOpen ? 'is-active' : 'is-not-active'}>
                
            </nav>
        </div>
    );
}
 
export default Nav;