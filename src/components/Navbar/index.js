import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarStyled'


const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLinks to='profile'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Profile</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='work'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Work</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='contact'
              smooth={true} duration={500} spy={true} exact='true'
            >Contact</NavLinks>
          </NavItem>
        </NavMenu>

      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;