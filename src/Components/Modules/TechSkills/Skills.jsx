import React from "react";
import {container, skills} from './skills.module.css'

const techIcons = [
    './src/assets/image/TechIcons/bootstrap.svg',
    './src/assets/image/TechIcons/css3.svg',
    './src/assets/image/TechIcons/django.svg',
    './src/assets/image/TechIcons/docker.svg',
    './src/assets/image/TechIcons/express.svg',
    './src/assets/image/TechIcons/git.svg',
    './src/assets/image/TechIcons/github.svg',
    './src/assets/image/TechIcons/googlecloud.svg',
    './src/assets/image/TechIcons/html5.svg',
    './src/assets/image/TechIcons/javascript.svg',
    './src/assets/image/TechIcons/mongodb.svg',
    './src/assets/image/TechIcons/mongoose.svg',
    './src/assets/image/TechIcons/nextdotjs.svg',
    './src/assets/image/TechIcons/nodedotjs.svg',
    './src/assets/image/TechIcons/postgresql.svg',
    './src/assets/image/TechIcons/python.svg',
    './src/assets/image/TechIcons/react.svg',
    './src/assets/image/TechIcons/redux.svg',
    './src/assets/image/TechIcons/sequelize.svg',
    './src/assets/image/TechIcons/slack.svg',
    './src/assets/image/TechIcons/sqlite.svg',
    './src/assets/image/TechIcons/styledcomponents.svg',
    './src/assets/image/TechIcons/tailwindcss.svg',
    './src/assets/image/TechIcons/trello.svg',
    './src/assets/image/TechIcons/visualstudiocode.svg'
]


const Skills = () => {
  return (
    <section className={container}>
        <hr/>
        <div className={skills}>

            {
                techIcons.map((svg, index) => {
                    return <svg key={index}
                            width={50}
                            height={50}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <image href={svg} width={50} height={50}/>
                    </svg> 
                })
            }
        </div>
        
    </section>
    );
};

export default Skills;
