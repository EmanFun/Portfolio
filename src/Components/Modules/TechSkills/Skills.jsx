import React from "react";
import { TypeAnimation } from "react-type-animation";
import {container, skills} from './skills.module.css'

const techIcons = [

]

const frontTechs = [
    './TechIcons/bootstrap.svg',
    '/TechIcons/javascript.svg',
    '/TechIcons/css3.svg',
    '/TechIcons/react.svg',
    '/TechIcons/redux.svg',
    '/TechIcons/html5.svg',
    '/TechIcons/styledcomponents.svg',
    '/TechIcons/tailwindcss.svg',
    '/TechIcons/nextdotjs.svg',
]
const backTechs = [
    
    '/TechIcons/django.svg',
    '/TechIcons/docker.svg',
    '/TechIcons/express.svg',
    '/TechIcons/googlecloud.svg',
    '/TechIcons/mongodb.svg',
    '/TechIcons/mongoose.svg',
    '/TechIcons/nodedotjs.svg',
    '/TechIcons/postgresql.svg',
    '/TechIcons/python.svg',
    '/TechIcons/sequelize.svg',
    '/TechIcons/sqlite.svg',
]
const otherTechs=[
    
    '/TechIcons/git.svg',
    '/TechIcons/github.svg',
    '/TechIcons/slack.svg',
    '/TechIcons/trello.svg',
    '/TechIcons/visualstudiocode.svg'
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
