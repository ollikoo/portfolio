import React, { useEffect } from 'react';
import { Parallax } from "react-parallax";
import AOS from 'aos';
import background from '../images/timeline-parallax-bg.jpg';
import parallaxFront from '../images/timeline-parallax-front.png';

const History = () => {

    const initTimeline = () => {
        AOS.init()
    }
    useEffect(initTimeline, [])

    return (
        <Parallax 
            bgImage={background} 
            strength={1000} 
            renderLayer={percentage => (
                <div className="timeline__parallax">
                    <img className="timeline__parallax-front"  style={{transform: `translate(0, ${percentage * 300}px)`}} src={parallaxFront} alt="" />
                </div>
            )}
        >
            <section id="history" className="section section--history overlay overlay--black">
                <div className="container">
                    <div className="row grid">
                        <div className="col col-sm-12 col-md-8">
                            <div className="section-title">
                                <h2 className="section-number" aria-hidden="true">04</h2>
                                <h2>Education</h2>
                            </div>
                            <ul className="history-timeline">
                                <li data-aos="fade-up" data-aos-duration="2000" data-aos-offset="100">
                                    <h4>JAMK University of Applied Sciences</h4>
                                    <p>Bachelor of Business Administration (BBA)</p>
                                    <p>Business Information Technology</p>
                                    <p>2015–2019</p>
                                    <p className="italic">My studies focused on web application and game development as well as their marketing and business.</p>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="2000" data-aos-offset="100">
                                    <h4>Universidad Argentina de la Empresa</h4>
                                    <p>Bachelor of Business Administration (BBA)</p>
                                    <p>International Business</p>
                                    <p>2018</p>
                                    <p className="italic">I had a great opportunity to spent whole spring semester doing business studies with global and Latin American focus in Buenos Aires, Argentina.</p>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="2000" data-aos-offset="100">
                                    <h4>Varkauden lukio</h4>
                                    <p>Secondary School Graduate</p>
                                    <p>2011–2014</p>
                                </li>
                            </ul>

                            <div className="section-title">
                                <h2 className="section-number" aria-hidden="true">05</h2>
                                <h2>Work</h2>
                            </div>
                            <ul className="history-timeline">
                                <li data-aos="fade-up" data-aos-duration="2000" data-aos-offset="100">
                                    <h4>Aava &amp; Bang Oy</h4>
                                    <p>Web Developer</p>
                                    <p>8/2018–</p>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="2000" data-aos-offset="100">
                                    <h4>Freelancer</h4>
                                    <p>Web Developer &amp; Designer</p>
                                    <p>1/2016–8/2018</p>              
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>
    )
}
 
export default History;