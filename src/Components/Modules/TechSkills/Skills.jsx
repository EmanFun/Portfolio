import React from "react";

import {
    SkillWrapper,
    Wrapper,
    Card,
    TechName,
    Title,
    SubTitle
} from './style';

import { Each } from "../../../utils/common/Each";

export const frontTechs = [
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
export const backTechs = [
    '/TechIcons/mysql.svg',
    '/TechIcons/springboot.svg',
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
export const otherTechs=[
    
    '/TechIcons/git.svg',
    '/TechIcons/github.svg',
    '/TechIcons/slack.svg',
    '/TechIcons/trello.svg',
    '/TechIcons/visualstudiocode.svg'
]

export const Skills = () => {
  return (
    <SkillWrapper>

        <Title>TECNOLOGÍAS </Title>
            
        <Wrapper>
            <SubTitle>Front-End</SubTitle>
            <Each of={frontTechs} render={(item, index)=>(
                <Card key={index}>
                    <svg 
                            width={50}
                            height={50}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <image  href={item} width={50} height={50}/>
                    </svg> 
                <TechName>{item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.svg'))}</TechName>
            </Card> 
            )}/>
        </Wrapper>
        <Wrapper>
            <SubTitle>Back-End</SubTitle>
            <Each of={backTechs} render={(item, index)=>(
                <Card key={index}>
                    <svg 
                            width={50}
                            height={50}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <image href={item} width={50} height={50}/>
                    </svg> 
                <TechName>{item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.svg'))}</TechName>
            </Card> 
            )}/>
        </Wrapper>
        <Wrapper>
            <SubTitle>Others</SubTitle>
            <Each of={otherTechs} render={(item, index)=>(
                <Card key={index}>
                    <svg 
                            width={50}
                            height={50}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <image href={item} width={50} height={50}/>
                    </svg> 
                <TechName>{item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.svg'))}</TechName>
            </Card> 
            )}/>
        </Wrapper>
    </SkillWrapper>
    );
};