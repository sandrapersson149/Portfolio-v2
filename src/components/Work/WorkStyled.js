import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'

export const WorkContainer = styled.div`
height: 100%;
margin: 200px 100px;

@media screen and (max-width: 500px) {
margin: 100px 40px;
}
`

export const TitleWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 70px 0;
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
p {
font-size: 25px;
font-weight: 300;
text-align: center;
}
a {
  font-weight: 600;
  text-decoration: none;
  color: black;
}
a:hover{
  color: gray;
}
`

export const ProjectsContainer = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
max-width: 800px;
margin: 0 auto;
div {
  margin: 40px 10px;
  h2 {
    font-size: 40px;
    margin: 0;
    text-decoration: none;
    font-weight: 700;
  }

}

@media screen and (max-width: 800px) {
div {
    h2{
    font-size: 27px;
  }
}

}
`
export const Wrapper = styled.section`
display: flex;
  p{
    margin-top: 10px;
  }
  a {
    /* margin-top: -20px; */
    margin-left: 40px;
  }
`

export const Arrow = styled(BsArrowRight)`
font-size: 40px;
height: auto;
color: black;
`