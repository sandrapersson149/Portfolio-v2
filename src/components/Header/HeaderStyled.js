import styled from 'styled-components'

export const HeaderContainer = styled.header`
height: 500px;
`
export const TitleWrapper = styled.div`
margin-left: 200px;
margin-top: 150px;

h1 {
  font-size: 80px;
  font-weight: 100;
  margin: 0;
}
h2 {
  font-size: 40px;
  font-weight: 800;
  margin: 0;
}

@media screen and (max-width: 930px) {
margin-left: 100px;
margin-top: 100px;
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 25px;
  }
}
`

export const HeaderImg = styled.img`
width: 350px;
position: absolute;
right: 100px;
top: 220px;

@media screen and (max-width: 930px) {
width: 200px;

}
`
export const BarWrapper = styled.div`
position: absolute;
top: 650px;
right: 20px;
@media screen and (max-width: 930px) {
  top: 480px;
}
`

export const TopBar = styled.div`
background: #276DAD;
height: 32px;
width: 800px;
transform: rotate(-4deg);
margin: 5px;
@media screen and (max-width: 930px) {
  width: 400px;
  height: 27px;
}
`

export const BottomBar = styled.div`
background: #54C6CD;
height: 20px;
width: 850px;
transform: rotate(-4deg);
margin: 5px;
@media screen and (max-width: 930px) {
  width: 450px;
  height: 20px;
}
`