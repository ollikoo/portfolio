import React from 'react';
import AOS from 'aos';
import background from '../images/hero.jpg';
import { Link } from "react-scroll";

const Hero = () => {

    const initHero = () => {
        AOS.init()
    }

    return (
        <div id="top" className="hero overlay overlay--black">
            <img onLoad={initHero} aria-hidden="true" className="hero__bg" src={background} alt="Hero background"/>
            <div className="container">
                <div className="row">
                    <div className="col" data-aos="fade-up" data-aos-duration="2000">
                        <div className="hero__profile"></div>
                        <h1>Hello! I am Olli and I am<br/> Web Developer and Designer</h1>
                        <Link
                            className="button"
                            activeClass="is-active"
                            to="samples"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Check my work
                        </Link>
                    </div>
                </div>
            </div>
            <a className="hero__link hero__link--linkedin" href="https://www.linkedin.com/in/ollikar/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' name='linkedin'></box-icon></a>
            <a className="hero__link hero__link--github" href="https://www.github.com/ollikoo/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' name='github'></box-icon></a>
            <a className="hero__link hero__link--instagram" href="https://www.instagram.com/ollikarkkainen/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' name='instagram'></box-icon></a>
            <p className="hero__quote">Do not follow where the path may lead.<br/>Go instead where there is no path and leave trail.<br/> – Ralph Waldo Emerson</p>
        </div>
    );
}
 
export default Hero;