import React from "react";
import { Link } from 'react-router-dom';
import {
    WrapperNav,
    NavItems,
    NavButton

} from './style';
function Nav() {
  return (
    <WrapperNav>

        <NavItems>
          <Link to={'/about'}>
            <NavButton>About</NavButton>
          </Link>
          <Link to={'/projects'}>
            <NavButton>Projects</NavButton>
          </Link>
          <Link to={'/skills'}>
            <NavButton>TechSkill</NavButton>
          </Link>
          <Link to={'/education'}>
            <NavButton>Education</NavButton>
          </Link>
        </NavItems>
    </WrapperNav>
  );
}

export default Nav;
