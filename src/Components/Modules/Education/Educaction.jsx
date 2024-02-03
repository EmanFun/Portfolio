import React from "react";
import { Each } from "../../../utils/common/Each"

import {
  WrapperEducation,
  Wrapper,
  Title,
  SubTitle,
  Text
} from './style';

const educationList =[
  {title: 'Full Stack Web Developer', institution: 'Henry', type: 'BootCamp', duration: '700Hs Teórico-Práctico', year: '2022'},
  {title: 'Lic. en Ciencias de la Computación', institution: 'UBA', type: 'Carrera Universitaria', duration: 'Grado', year: '2023'}

]


const Educaction = () => {
  return (
      <WrapperEducation >
        <Title>EDUCACIÓN PROFESIONAL</Title>
        <div>
          <Each of={educationList} render={(item, index)=>(
            <Wrapper key={index}>
              <SubTitle>{item.title}</SubTitle>
              <Text>{item.type}</Text>
              <Text>{item.institution}</Text>
              <Text>{item.duration} {item.year}</Text>
            </Wrapper>
          )}/>
        </div>
      </WrapperEducation>
  );
};

export default Educaction;
