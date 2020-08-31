import React from 'react';

const About = props => {

    return (
        <section id={props.id} className="section section--about">
            <div className="container">
                <div className="section-title">
                    <h2 className="section-number" aria-hidden="true">{props.number}</h2>
                    <h2>{props.title}</h2>
                </div>
                <div className="row">
                    <div className="col">
                       
                    </div>
                </div>
            </div>
            
        </section>
    );
}
 
export default About;