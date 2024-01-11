import React from "react";
import { container, projects, projectCard } from './project.module.css';
const projectsArray = [
    {title:'project1', rol: 'rol', status: 'status'},
    {title:'project2', rol: 'rol', status: 'status'}, 
    {title:'project3', rol: 'rol', status: 'status'},
]

const Projects = () => {
  return (
    <section className={container}>
        <hr/>
        <div className={projects}>
            
                {
                    projectsArray.map((project, index)=>{
                        return <div key={index} className={projectCard}>
                                  <h3>Title: {project.title}</h3>
                                  <p>Rol: {project.rol}</p>
                                  <p>Status:{project.status}</p>
                                </div> 
                    })
                }
            
        </div>

    </section>
  );
};

export default Projects;
