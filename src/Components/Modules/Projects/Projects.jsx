import React, { useState } from "react";
import { container,
  projectsContainer,
  projectCard,
  modalOverlay,
  modalContainer,
  closeModal, 
  icons,
} from './project.module.css';
import { Each } from '../../../utils/common/Each';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import { backTechs, frontTechs } from "../TechSkills/Skills";

const projectsArray = [
    {title:'PokemonApp', rol: 'FullStack', link: 'https://pokemon-six-ashy.vercel.app/', description:'Diseñar y Desarrollar una App de Pokemons que incluye: búsquedas, filtrados combinados, ordenamientos, etc.', technologies:["react", "redux", "css3", "express", "nodedotjs", "postgresql", "sequelize"]},
    {title:'HenryGaming', rol: 'FullStack', link: 'https://github.com/EmanFun/PF-HENRYGAMING', description:'Diseñar y Desarrollar un Ecommerce de ventas de insumos tecnológicos que incluye: búsquedas, filtrados combinados, ordenamientos, autentificación, dashboard Vendedor y cliente, etc.', technologies:[ "redux", "react","bootstrap", "express", "nodedotjs", "postgresql", "sequelize"] }, 
    {title:'AgileStrat', rol: 'Backend', link: 'https://agilestrat-frontend.vercel.app/', description:'Diseño y desarrollo de una API para una startup que comercializa servicios y cursos a pequeños emprendedores, algunas de sus funcionalidades son, regustri de usuarios, Gestión de cursos, sistema de calificaciones y reseñas, panel de administrador, etc.', technologies:['java', 'springboot', 'mysql' ]},
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/', description:'Desarrollé mi portafolio como una expresión visual de mi trayectoria y habilidades en desarrollo web, destacando proyectos significativos y demostrando mi pasión por la creación de experiencias digitales innovadoras.', technologies: ['react', 'css3', "html5"] },
    {title: 'StarWarApi', rol: 'Backend', link: 'https://github.com/EmanFun/DockerStarWars', description:'Diseñar y Desarrollar una API Rest con arquitectura de microservicios que incluye: Rutas para obtener characters, films, planets. Búsqueda por Id, etc', technologies:["express", "nodedotjs", "docker", "mongodb", "moongose"]},
]
/* {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'},
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'}, */


const searchIcons = (indexTech) =>{

  const allIcons = frontTechs.concat(backTechs);
  console.log(indexTech)
  const proyectIcons = allIcons.filter((element)=>{ 
    if( projectsArray[indexTech].technologies.includes(element.substring(element.lastIndexOf('/') + 1, element.lastIndexOf('.svg'))) ){
      return element
    }

  
  });
  console.log(proyectIcons)
  return proyectIcons;
}


const Projects = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [iconsList, setIconsList] = useState([]);
  const activeModal = (event)=>{
    const icons = searchIcons(event.currentTarget.id);
    setModalIndex(Number(event.currentTarget.id))
    setIconsList(icons)
    setModalActive(true);
    
  };
  const desactiveModal = () =>{
    setModalActive(false);
  };
  console.log(modalIndex)
  return (
    <section className={container}>
        <hr/>
        <div className={projectsContainer}>
          <Each of={projectsArray} render={(item, index)=>(
            <div key={index} className={projectCard}>
              <h3>{item.title}</h3>
              <p>Rol: {item.rol}</p>
              <a id={`${index}`} onClick={activeModal} href={item.link} target="self">
                <FaExternalLinkSquareAlt color="black" size={30}/>
              </a>
              {modalActive && (
                  <div className={modalOverlay}>
                    <div className={modalContainer}>
                      <h1>{projectsArray[modalIndex].title}</h1>
                      <p>{projectsArray[modalIndex].description}</p>
                      <div className={icons}>
                        <Each of={iconsList} render={(item, index)=>(
                            <div key={index}>
                                <svg 
                                        width={20}
                                        height={20}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <image href={item} width={20} height={20}/>
                                </svg> 
                            <span>{item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.svg'))}</span>
                        </div> 
                        )}/>

                      </div>
                      <button onClick={desactiveModal} className={closeModal}>Cerrar</button>
                    </div>
                  </div>
               )}
            </div> 
          )}/>
        </div>
    </section>
  );
};

export default Projects;
