import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperNav = styled.nav`
    position: fixed;
    width: 100vw;
    background-color: transparent;
    height: 5rem;
    display: flex;
    justify-content: center;



`

export const NavItems = styled.h1`
    width: 55%;
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 690px ) {
        font-size: medium;
    }

`

export const NavButton = styled(NavLink)`
    padding: 1rem;
    border-radius: 1.5rem;
    background-color: transparent;
    text-decoration: none;
    color: #280503;
    transition: transform 0.5s ease-in-out;

    &:hover {
        
        transform: scale(1.3);
        transition-delay: 0.2s;
    }
`;