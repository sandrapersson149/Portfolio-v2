import React from 'react'
import { HeaderContainer, HeaderImg, TopBar, BottomBar, BarWrapper, TitleWrapper } from './HeaderStyled'
import HeadShot from '../../images/headshot.png'

const Header = () => {
  return (
    <HeaderContainer >
      <TitleWrapper>
        <h1>Sandra Persson</h1>
        <h2>Front end developer</h2>
      </TitleWrapper>
      <HeaderImg src={HeadShot} alt='Pic of Sandra' />
      <BarWrapper>
        <TopBar></TopBar>
        <BottomBar></BottomBar>
      </BarWrapper>
    </HeaderContainer>
  )
}

export default Header
