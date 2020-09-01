import React from 'react';
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const scrollTop = () => {
        scroll.scrollToTop()
    }

    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="left col-sm-12 col-lg-2">
                        <div onClick={scrollTop} className="footer__logo"></div>
                    </div>
                    <div className="center col-sm-12 col-lg-8">
                        <p>Drop me a line at <a href="mailto:olli.i.karkkainen@gmail.com">olli.i.karkkainen(at)gmail.com</a> or call <a href="tel:+358407252921">+358407252921</a></p>
                    </div>
                    <div className="right col-sm-12 col-lg-2">
                        <div className="footer__links">
                            <a className="footer__link footer__link--linkedin" href="https://www.linkedin.com/in/ollikar/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' name='linkedin'></box-icon></a>
                            <a className="footer__link footer__link--github" href="https://www.github.com/ollikoo/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' name='github'></box-icon></a>
                            <a className="footer__link footer__link--instagram" href="https://www.instagram.com/ollikarkkainen/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' name='instagram'></box-icon></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
 
export default Footer;