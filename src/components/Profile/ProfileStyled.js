import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProfileContainer = styled.div`
background: #D8E5F0;
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 85%;
margin: -50px auto 50px auto;
z-index: 4;
position: relative;
margin-top: -50px;
padding: 30px;

@media screen and (max-width: 900px) {
flex-direction: column;
width: 100%;
padding: 0;
}
`

export const TextWrapper = styled.div`
margin: 70px;
display: flex;
flex-direction: column;
width: 800px;
justify-content: space-between;

@media screen and (max-width: 950px) {
  width: auto;
  margin-top: 100px;
}
@media screen and (max-width: 450px) {
margin: 40px;
margin: 100px 15px 15px 15px;
}
`


export const ProfileH2 = styled(motion.h2)`
margin: 0;
width: 150px;
text-align: center;
padding: 5px 10px;
font-size: 30px;
line-height: 45px;
text-transform: uppercase;
color: #252839;
border-bottom: 5px solid #276DAD;
`

export const ProfileText = styled.p`
font-size: 20px;
font-weight: 300;
line-height: 29px;

@media screen and (max-width: 400px) {
  font-size: 17px;
}
`

export const ImgWrapper = styled.div`
margin: auto 40px;

@media screen and (max-width: 900px) {
margin: 0 auto 80px auto;
}
`

export const ProfileImg = styled(motion.img)`
width: 250px;
height: 250px;
border-radius: 100%;
border: 1px solid #276DAD;
padding: 15px;

@media screen and (max-width: 1000px) {
width: 220px;
height: 220px;

}

@media screen and (max-width: 650px) {
width: 200px;
height: 200px;
}
`

