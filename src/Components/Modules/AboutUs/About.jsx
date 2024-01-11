 import React from "react";
 import { TypeAnimation } from 'react-type-animation';
 import { container, about } from './About.module.css';
 
 const About = () => {
   return (
        <section className={container}>
            <div className={about}>
                <TypeAnimation
                sequence={[
                    'Emanuel Funes',
                    1000,
                    'Full Stack Web Developer',
                    1000,
                ]}
                wrapper="h1"
                speed={50}
                style={{ fontWeight: 'bolder' }}
                repeat={Infinity}
                />
                <p>
                    Soy un apasionado desarrollador Full Stack Web Jr con una sólida base en tecnologías front-end y 
                    back-end. Mi entusiasmo por la programación y la creación de soluciones tecnológicas me impulsa 
                    a buscar oportunidades emocionantes en el campo de la tecnología. Con una mentalidad orientada a 
                    la resolución de problemas y un compromiso con el aprendizaje continuo,
                    aspiro a contribuir al diseño y desarrollo de aplicaciones web de alta calidad.

                </p>
                

                
            </div>
        </section>
    );
 };
 
 export default About;
 