import React from "react";
import { TypeAnimation } from "react-type-animation";
import {container, skillsContainer} from './skills.module.css'
import { Each } from "../../../utils/common/Each";

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

        <div className={skillsContainer}>
            <h4>Front-End</h4>
            <Each of={frontTechs} render={(item, index)=>(
                <div key={index}>
                    <svg 
                            width={50}
                            height={50}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <image href={item} width={50} height={50}/>
                    </svg> 
                <p>{item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.svg'))}</p>
            </div> 
            )}/>
        </div>
        <div className={skillsContainer}>
            <h4>Back-End</h4>
            <Each of={backTechs} render={(item, index)=>(
                <div key={index}>
                    <svg 
                            width={50}
                            height={50}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <image href={item} width={50} height={50}/>
                    </svg> 
                <p>{item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.svg'))}</p>
            </div> 
            )}/>
        </div>
        <div className={skillsContainer}>
            <h4>Others</h4>
            <Each of={otherTechs} render={(item, index)=>(
                <div key={index}>
                    <svg 
                            width={50}
                            height={50}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <image href={item} width={50} height={50}/>
                    </svg> 
                <p>{item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.svg'))}</p>
            </div> 
            )}/>
        </div>
    </section>
    );
};

export default Skills;
