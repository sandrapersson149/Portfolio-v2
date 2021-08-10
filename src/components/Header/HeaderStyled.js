import styled from 'styled-components'


export const HeaderContainer = styled.header`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 110vh;
position: relative;
z-index: 1;
border: none;
`

export const HeaderBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #fff;
`

export const TitleWrapper = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
display: flex;
flex-direction: column;
margin-top: -50px;
h1 {
margin: 0;
font-size: 70px;
text-align: center;
font-weight: 200;
text-transform: uppercase;
}

div > * {
    visibility: hidden;
    position: absolute;
    align-items: center;
    animation: 20s autoplay1 infinite;
  }
  @keyframes autoplay1 {
    0% {
      visibility: visible;
      opacity: 0%;
    }
    10% {
      visibility: visible;
      opacity: 45%;
    }
    25% {
      visibility: visible;
      opacity: 100%;
    }
    35% {
      visibility: hidden;
      opacity: 0%;
    }
  }
  
  div > *:nth-child(1) {animation-delay: 0s}
  div > *:nth-child(2) {animation-delay: 6s}
  div > *:nth-child(3) {animation-delay: 12s}

@media screen and (max-width: 800px) {
h1 {
  font-size: 40px;
}
}
@media screen and (max-width: 480px) {
h1 {
  font-size: 30px;
}
}
`

export const HeaderInfo = styled.div`
display: flex;
justify-content: center;
h3 {
  font-weight: 200;
  font-size: 35px;
  text-align: center;
}
@media screen and (max-width: 800px) {
  h3 {
    font-size: 30px;
  } 
}
@media screen and (max-width: 480px) {
  h3 {
    font-size: 20px;
  }
}
`
