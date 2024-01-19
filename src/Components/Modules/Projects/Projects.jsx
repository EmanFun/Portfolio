import React from "react";
import { container, projectsContainer, projectCard } from './project.module.css';
import { Each } from '../../../utils/common/Each';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const projectsArray = [
    {title:'PokemonApp', rol: 'FullStack', link: 'https://pokemon-six-ashy.vercel.app/'},
    {title:'HenryGaming', rol: 'FullStack', link: 'status'}, 
    {title:'AgileStrat', rol: 'Backend', link: 'https://agilestrat-frontend.vercel.app/'},
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'},
    {title: 'StarWarApi', rol: 'Backend', link: ''},
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'},
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'},
    
]

const Projects = () => {
  return (
    <section className={container}>
        <hr/>
        <div className={projectsContainer}>
          <Each of={projectsArray} render={(item, index)=>(
            <div key={index} className={projectCard}>
              <h3>{item.title}</h3>
              <p>Rol: {item.rol}</p>
              <a href={item.link} target="blank">
                <FaExternalLinkSquareAlt color="black" size={30}/>
              </a>
            </div> 
          )}/>
        </div>
    </section>
  );
};

export default Projects;
