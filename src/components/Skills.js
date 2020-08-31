import React from 'react';

const Skills = props => {

    return (
        <section id={props.id} className="section section--skills">
            <div className="container">
                <div className="section-title">
                    <h2 className="section-number" aria-hidden="true">{props.number}</h2>
                    <h2>{props.title}</h2>
                </div>
                <div className="row">
                    <div className="column col-sm-12 col-lg-4">
                        <div className="inner-wrap">
                            <div className="icon icon--react"></div>
                            <h4>React Apps</h4>
                            <p>With fancy single page applications, React gave me the biggest wow effect when it became more popular. Over the past year I have gathered pretty solid skills for basic React development. The more I know, the more I like it. Recently, I have started to study other technologies eg. node.js, Express.js, GraphQL and MongoDB to gain more tools to become proper full stack developer.</p>
                        </div>
                    </div>
                    <div className="column col-sm-12 col-lg-4">
                        <div className="inner-wrap">
                            <div className="icon icon--wordpress"></div>
                            <h4>WordPress</h4>
                            <p>I got my first contact with the world of WordPress four years ago. With my current team I have had an opportunity to develop almost thirty custom WordPress-based services used by thousands of people. Whether you need custom blocks, plugins or themes, I'll deliver. More recently, I have started to shift my focus towards the Headless CMS that allows me to bring in the front end of my choice.</p>
                        </div>
                    </div>
                    <div className="column col-sm-12 col-lg-4">
                        <div className="inner-wrap">
                            <div className="icon icon--ui"></div>
                            <h4>UX/UI Design</h4>
                            <p>I have also gathered some experience in designing layouts and prototypes for web services. In addition to the modern and beautiful layout, I also value user centric and accessible design. My designs have been praised for being up to date and easy to use. I put a lot emphasis on making a long lasting impression on the web service's audience. </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
 
export default Skills;