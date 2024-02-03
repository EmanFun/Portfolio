import React from "react";

import {
  WrapperProjects,
  Wrapper,
  Card,
  Title,
  Text,
  Link
} from './style'

import { Each } from '../../../utils/common/Each';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const projectsArray = [
    {title:'PokemonApp', rol: 'FullStack', link: 'https://pokemon-six-ashy.vercel.app/'},
    {title:'HenryGaming', rol: 'FullStack', link: 'https://github.com/EmanFun/PF-HENRYGAMING'}, 
    {title:'AgileStrat', rol: 'Backend', link: 'https://agilestrat-frontend.vercel.app/'},
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'},
    {title: 'StarWarApi', rol: 'Backend', link: 'https://github.com/EmanFun/DockerStarWars'},
]
/* {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'},
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'}, */


const Projects = () => {

  return (
    <WrapperProjects>
        <Wrapper >
          <Each of={projectsArray} render={(item, index)=>(
            <Card key={index} >
              <Title>{item.title}</Title>
              <Text>Rol: {item.rol}</Text>
              <Link id={`${index}`}  href={item.link} target="self">
                <FaExternalLinkSquareAlt color="black" size={30}/>
              </Link>
            </Card> 
          )}/>
        </Wrapper>
    </WrapperProjects>
  );
};

export default Projects;
