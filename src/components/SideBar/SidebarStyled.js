import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #DAE0E3;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color: #252839;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2.5rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #54C6CD;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 90px);
text-align: center;

@media screen and (max-width: 480px) {
  grid-template-rows: repeat(5,70px);
}
`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
font-weight: 600;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #54C6CD;
text-transform: uppercase;
cursor: pointer;
margin-right: 25px;

&:hover {
  color: #54C6CD;
  transition: 0.2s ease-in-out;
}
`