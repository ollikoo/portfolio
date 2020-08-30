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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 nav-bar__left">
                            <div className="nav-bar__logo"></div>
                        </div>
                        <div className="col-6 nav-bar__right">
                            <div className="nav-bar__menu-trigger">
                                <Burger handleClick={handleNav} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className={navOpen ? 'is-active' : 'is-not-active'}>
                <div className="nav-item">
                    <a href="#top"><box-icon name='home-alt' ></box-icon></a>
                </div>
                <div className="nav-item">
                    <a href="#work"><box-icon name='briefcase'></box-icon></a>
                </div>
            </nav>
        </div>
    );
}
 
export default Nav;