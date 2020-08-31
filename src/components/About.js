import React from 'react';

const About = props => {

    return (
        <section id={props.id} className="section section--about">
            <div className="half-n-half">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <div className="container">
                <div className="row grid">
                    <div className="col-sm-12 col-lg-6"></div>
                    <div className="col-sm-12 col-lg-6 right">
                        <div className="section-title">
                            <h2 className="section-number" aria-hidden="true">{props.number}</h2>
                            <h2>{props.title}</h2>
                        </div>
                        <p className="lead">Did you know that unicorns exists? I did not. For developers, the word “unicorn” refers to someone with such a diverse range of skills that they’re incredibly rare. With my Bachelor’s studies, working experience and hobbies I have gathered so wide skillset that my colleagues started to call me Mr. Unicorn. True story.</p>
                        <p>It is important for me to stay up to date in my ever-evolving industry. I am motivated by new challenges and learning new things. If there is something I don’t already know, I want to figure it out. I believe that the best developers are the ones who can work as a team. In addition, I also enjoy developing common operating model for my team and to share my knowledge among other members. <br/><br/>The vast scale of different sized projects have developed my knowledge about the requirements of the web services. I can effectively carry out projects from design to implementation independently or as a member of a team. My experience comes mainly from the front end development but my future goal is to become full stack developer.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
 
export default About;