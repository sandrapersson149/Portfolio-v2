import styled from "styled-components";
import { RiLinkedinFill, RiGithubLine, RiMailLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

export const ContactContainer = styled.div`
width: 60%;
margin: 300px auto 200px auto;
background: #D8E5F0;
box-shadow: 8px 8px 4px -5px rgba(0, 0, 0, 0.31);
  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 200px auto;
  }
`
export const ContactTitel = styled.h2`
margin: 50px auto;
width: 150px;
text-align: center;
padding-top: 100px;
font-size: 30px;
line-height: 45px;
text-transform: uppercase;
color: #252839;
border-bottom: 5px solid #276DAD;
`
export const ContactInfo = styled.p`
font-size: 20px;
text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 15px;
    margin: 30px;
  }
`
export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
  @media screen and (max-width: 480px) {
  flex-direction: column;
  padding-bottom: 20px;
  }
`

export const IconButton = styled(motion.a)`
margin: 30px 15px 50px 15px;
  @media screen and (max-width: 480px) {
    margin: 20px 15px;
  }
`
export const GithubIcon = styled(RiGithubLine)`
text-decoration: none;
color: black;
border: 2px solid black;
border-radius: 100%;
padding: 12px;
width: 40px;
height: 40px;
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
width: 40px;
height: 40px;
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
width: 40px;
height: 40px;
:hover {
  color: white;
  background: #252839;
  border: 2px solid #252839;
}
`