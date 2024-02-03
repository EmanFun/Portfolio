import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperInit = styled.section`
    color: #370807;
    height: 100vh;
    background-image: url('./rootImage.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
`

export const Wrapper = styled.div`
    margin-left: 4rem;
    display: list-item;
    list-style: none;

`

export const InitTitle = styled.h1`
    text-align: start;
`

export const LinkButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    color: #370807;
    font-weight: bold;
    background-color: transparent;
    margin: 2rem;
    text-decoration: none;
    transition: transform 0.5s ease-in-out;
    
    &:hover{
        transform: scale(1.5);
        transition-delay: 0.2s;
    }

`

