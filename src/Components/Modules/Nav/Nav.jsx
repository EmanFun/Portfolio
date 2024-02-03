import React from "react";
import { NavLink } from 'react-router-dom';
import {
    WrapperNav,
    NavItems,
    NavButton

} from './style';
function Nav() {
  return (
    <WrapperNav>

        <NavItems>
          <NavButton to={'/about'}>
            Sobre mí
          </NavButton>
          <NavButton to={'/projects'}>
            Proyectos
          </NavButton>
          <NavButton to={'/skills'}>
            Habilidades
          </NavButton>
          <NavButton to={'/education'}>
            Estudios
          </NavButton>
        </NavItems>
    </WrapperNav>
  );
}

export default Nav;
