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
            About
          </NavButton>
          <NavButton to={'/projects'}>
            Projects
          </NavButton>
          <NavButton to={'/skills'}>
            TechSkill
          </NavButton>
          <NavButton to={'/education'}>
            Education
          </NavButton>
        </NavItems>
    </WrapperNav>
  );
}

export default Nav;
