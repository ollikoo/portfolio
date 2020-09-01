import React from 'react';
import AOS from 'aos';
import background from '../images/hero.jpg';

const Hero = () => {

    const initHero = () => {
        AOS.init()
    }

    return (
        <div id="top" className="hero overlay overlay--black">
            <img onLoad={initHero} aria-hidden="true" className="hero__bg" src={background} alt="Hero background"/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 data-aos="fade-up" data-aos-duration="2000">Hello, I am Olli and I am<br/> 25-year-old Web Developer and Designer</h1>
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