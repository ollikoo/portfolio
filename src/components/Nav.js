import React, { useState } from 'react';
import Burger from './Burger';
import { Link } from "react-scroll";

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
                    <Link
                        activeClass="is-active"
                        to="top"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <box-icon name='home-alt' ></box-icon>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                        activeClass="is-active"
                        to="samples"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <box-icon name='briefcase' ></box-icon>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                        activeClass="is-active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <box-icon name='info-circle' ></box-icon>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
 
export default Nav;