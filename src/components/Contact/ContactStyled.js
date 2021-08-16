import styled from "styled-components";
import { RiLinkedinFill, RiGithubLine, RiMailLine } from 'react-icons/ri'

export const ContactContainer = styled.div`
height: 400px;
width: 100%;
background: #D8E5F0;
padding-top: 40px;
`

export const ContactTitel = styled.h2`
margin: 100px auto 20px auto;
width: 150px;
text-align: center;
padding: 0 10px;
font-size: 30px;
line-height: 45px;
text-transform: uppercase;
color: #252839;
border-bottom: 5px solid #276DAD;
`

export const ContactInfo = styled.p`
font-size: 20px;
margin: 0 15px;
text-align: center;
`

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px;
`
export const IconButton = styled.a`
margin: 15px;
`

export const GithubIcon = styled(RiGithubLine)`
text-decoration: none;
color: black;
border: 2px solid black;
border-radius: 100%;
padding: 12px;
width: 30px;
height: 30px;
:hover {
  color: white;
  background: #252839;
  border: 2px solid #252839;
}
`

export const LinkedInIcon = styled(RiLinkedinFill)`
text-decoration: none;
color: black;
border: 2px solid black;
border-radius: 100%;
padding: 12px;
width: 30px;
height: 30px;
:hover {
  color: white;
  background: #252839;
  border: 2px solid #252839;
}
`

export const MailIcon = styled(RiMailLine)`
text-decoration: none;
color: black;
border: 2px solid black;
border-radius: 100%;
padding: 12px;
width: 30px;
height: 30px;
:hover {
  color: white;
  background: #252839;
  border: 2px solid #252839;
}
`