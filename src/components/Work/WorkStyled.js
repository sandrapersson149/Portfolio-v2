import styled from 'styled-components'

export const WorkContainer = styled.div`
margin: 200px auto 300px auto;
overflow: hidden;
 @media screen and (max-width: 800px) {
   margin-left: 20px;
   margin-right: 20px;
} 
`
export const TitleWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 20px 0;
h3 {
    font-size: 25px;
    font-weight: 300;
  }
`
export const WorkTitle = styled.h2`
margin: 0;
margin-top: 50px;
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
padding: 20px;
overflow: hidden;
div {
  margin: 30px 0;
  a {
    font-size: 40px;
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    margin: 0;
  }
}
@media screen and (max-width: 700px) {
    div {
    a {
      font-size: 30px;
    }
  }
}
  @media screen and (max-width: 480px) {
      div {
      h2 {
        font-size: 20px;
      }
    }
  }
`
export const Wrapper = styled.section`
display: flex;
max-width: 600px;
  p{
    margin: 5px;
    max-width: 450px;
  }
  @media screen and (max-width: 700px) {
    max-width: 300px;
    p{
    font-size: 13px;
  }
}
`