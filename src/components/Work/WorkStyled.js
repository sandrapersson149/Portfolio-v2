import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'

export const WorkContainer = styled.div`
height: 100%;
margin: 200px 50px 50px 50px;
`

export const TitleWrapper = styled.div`

`

export const WorkTitle = styled.h2`
margin: 0;
width: 130px;
text-align: center;
padding: 0 10px;
font-size: 30px;
line-height: 45px;
text-transform: uppercase;
color: #252839;
border-bottom: 5px solid #54C6CD;
`

export const WorkInfo = styled.div`

`

export const ProjectsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 90%;
margin: 0 auto;
div {
  width: 500px;
  margin: 25px;
}
img{
  width: 500px;
}
`

export const Project = styled(motion.div)`
border: 1px solid black;
display: block;

`

export const Arrow = styled(IoIosArrowForward)`
border-radius: 100%;
background: transparent;
border: 2px solid black;
width: 30px;
height: 30px;
`