import React from 'react'
import { HeaderContainer, TitleWrapper, HeaderBg, VideoBg, HeaderInfo } from './HeaderStyled'
import Video from '../../video/video.mp4'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeaderBg>
      <TitleWrapper>
        <h1>Sandra Persson</h1>
        <HeaderInfo>
          <h3>Aspiring Front end developer</h3>
          <h3>Student at KYH Stockholm</h3>
          <h3>Love design in any shape or form</h3>
        </HeaderInfo>
      </TitleWrapper>
    </HeaderContainer>
  )
}

export default Header;
