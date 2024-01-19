import React from "react";
import { container, projectsContainer, projectCard } from './project.module.css';
import { Each } from '../../../utils/common/Each';
const projectsArray = [
    {title:'project1', rol: 'rol', status: 'status'},
    {title:'project2', rol: 'rol', status: 'status'}, 
    {title:'project3', rol: 'rol', status: 'status'},
]

const Projects = () => {
  return (
    <section className={container}>
        <hr/>
        <div className={projectsContainer}>
          <Each of={projectsArray} render={(item, index)=>(
            <div key={index} className={projectCard}>
              <h3>Title: {item.title}</h3>
              <p>Rol: {item.rol}</p>
              <p>Status:{item.status}</p>
            </div> 
          )}/>
            
        </div>
    </section>
  );
};

export default Projects;
