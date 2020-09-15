import React from 'react';
import AOS from 'aos';
import background from '../images/parallax-bg.jpg';
import parallaxMid from '../images/parallax-mid.png';
import parallaxFront from '../images/parallax-front.png';
import { Link } from "react-scroll";
import { Parallax } from "react-parallax";

const Hero = () => {

    const initHero = () => {
        AOS.init()
    }

    return (
        <Parallax 
            bgImage={background} 
            strength={1000} 
            renderLayer={percentage => (
                <div className="hero__parallax">
                    <img className="hero__parallax-mid" style={{transform: `translate(0, ${percentage * 700}px)`}} src={parallaxMid} alt="" />
                    <img className="hero__parallax-front"  style={{transform: `translate(0, ${percentage * 300}px)`}} src={parallaxFront} alt="" />
                </div>
            )}
        >
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
        </Parallax>
    );
}
 
export default Hero;