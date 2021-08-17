import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
background: #DAE0E3;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
/* width: 100%; */
/* padding: 0 24px; */
max-width: 1200px;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 800px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.9rem;
  cursor: pointer;
  color: #252839;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 800px) {
  display: none;
}
`

export const NavItem = styled.li`
height: 80px;
font-size: 17px;
margin: 15px;
`

export const NavLinks = styled(LinkS)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
text-transform: uppercase;
font-weight: 600;
padding: 0 1rem;
height: 100%;
cursor: pointer;
:hover {
  opacity: 0.5;
}
&.active {
  border-bottom: 4px solid #276DAD;
}
`