import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import * as contentful from 'contentful';


const Samples = props => {

    const [projects, setProjects] = useState([]);

    const client = contentful.createClient({
        space: 'g1ucuyj5405u',
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
    })

    const getProjects = () => {
        client.getEntries()
        .then((response) => 
        {
        console.log(response.items)
        setProjects(response.items)
        })
        .catch(console.error)
    }
    useEffect(getProjects, [])

    return (
        <section id={props.id} className="section section--work">
            <div className="container">
                <h2>{props.title}</h2>
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