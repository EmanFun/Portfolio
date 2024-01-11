import React from "react";
import { TypeAnimation } from "react-type-animation";
import {container, skills} from './skills.module.css'

const techIcons = [

]

const frontTechs = [
    './public/TechIcons/bootstrap.svg',
    './public/TechIcons/javascript.svg',
    './public/TechIcons/css3.svg',
    './public/TechIcons/react.svg',
    './public/TechIcons/redux.svg',
    './public/TechIcons/html5.svg',
    './public/TechIcons/styledcomponents.svg',
    './public/TechIcons/tailwindcss.svg',
    './public/TechIcons/nextdotjs.svg',
]
const backTechs = [
    
    './public/TechIcons/django.svg',
    './public/TechIcons/docker.svg',
    './public/TechIcons/express.svg',
    './public/TechIcons/googlecloud.svg',
    './public/TechIcons/mongodb.svg',
    './public/TechIcons/mongoose.svg',
    './public/TechIcons/nodedotjs.svg',
    './public/TechIcons/postgresql.svg',
    './public/TechIcons/python.svg',
    './public/TechIcons/sequelize.svg',
    './public/TechIcons/sqlite.svg',
]
const otherTechs=[
    
    './public/TechIcons/git.svg',
    './public/TechIcons/github.svg',
    './public/TechIcons/slack.svg',
    './public/TechIcons/trello.svg',
    './public/TechIcons/visualstudiocode.svg'
]

const Skills = () => {
  return (
    <section className={container}>
        <hr/>
        <TypeAnimation
            sequence={[
                'TECHS SKILLS',
                1000,
            ]}
            wrapper="h2"
            speed={50}

            repeat={1}
        />

        <div className={skills}>
            <h4>Front-End</h4>
            {
                frontTechs.map((svg, index) => {
                    return<div key={index}>
                        <svg 
                                width={50}
                                height={50}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            <image href={svg} width={50} height={50}/>
                        </svg> 
                        <span>{svg.substring(svg.lastIndexOf('/') + 1, svg.lastIndexOf('.svg'))}</span>
                    </div> 
                })
            }
        </div>
        <div className={skills}>
            <h4>Back-End</h4>
            {
                backTechs.map((svg, index) => {
                    return <div key={index}>
                        <svg 
                                width={50}
                                height={50}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            <image href={svg} width={50} height={50} />
                        </svg> 
                        <span>{svg.substring(svg.lastIndexOf('/') + 1, svg.lastIndexOf('.svg'))}</span>
                    </div>
                })
            }
        </div>
        <div className={skills}>
            <h4>Others</h4>
            {
                otherTechs.map((svg, index) => {
                    return <div key={index}>
                        <svg 
                                width={50}
                                height={50}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            <image href={svg} width={50} height={50}/>
                        </svg> 
                        <span>{svg.substring(svg.lastIndexOf('/') + 1, svg.lastIndexOf('.svg'))}</span>
                    </div>
                })
            }
        </div>
        
    </section>
    );
};

export default Skills;
