import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import * as contentful from 'contentful';


const Samples = props => {

    const [projects, setProjects] = useState([]);

    const client = contentful.createClient({
        space: 'g1ucuyj5405u',
        environment: 'master',
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
    })

    const getProjects = () => {
        client.getEntries({
            order: '-fields.year',
            content_type: 'project'
        })
        .then((response) => setProjects(response.items))
        .catch(console.error)
    }
    useEffect(getProjects, [])

    return (
        <section id={props.id} className="section section--samples">
            <div className="container">
                <div className="section-title">
                    <h2 className="section-number" aria-hidden="true">{props.number}</h2>
                    <h2>{props.title}</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <Slider slides={projects} />
                    </div>
                </div>
            </div>
            
        </section>
    );
}
 
export default Samples;