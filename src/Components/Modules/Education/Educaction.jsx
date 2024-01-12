import React from "react";
import { Each } from "../../../utils/common/Each"
import {
  container,
  educationContainer,
  langContainer
} from "./education.module.css"

const educationList =[
  {title: 'Full Stack Web Developer', institution: 'Henry', type: 'BootCamp', duration: '700Hs Teórico-Práctico', year: '2022'},
  {title: 'Lic. en Ciencias de la Computación', institution: 'UBA', type: 'University Career', duration: 'Grado', year: '2023'}

]

const langList = [
  {languague: 'Ingles', certification: 'A2 Elementary'}
]

const Educaction = () => {
  return (
      <section className={container}>
        <h2>EDUCACIÓN PROFESIONAL</h2>
        <div className={educationContainer}>
          <Each of={educationList} render={(item, index)=>(
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.type}</p>
              <p>{item.institution}</p>
              <p>{item.duration} {item.year}</p>
            </div>
          )}/>
        </div>
        <h2>Idiomas</h2>
        <div className={langContainer}>
            <Each of={langList} render={(item, index)=>(
              <div>
                <p>{item.languague} {item.certification}</p>
              </div>
            )}/>
        </div>
      </section>
  );
};

export default Educaction;
