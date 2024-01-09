import React from "react";
import { container, projects, projectCard } from './project.module.css';
const projectsArray = [
    'project1',
    'project2', 
    'project3',
]

const Projects = () => {
  return (
    <section className={container}>
        <hr/>
        <div className={projects}>
            
                {
                    projectsArray.map((project, index)=>{
                        return <div key={index} className={projectCard}>
                                {project}
                                </div> 
                    })
                }
            
        </div>
        <hr/>
    </section>
  );
};

export default Projects;
