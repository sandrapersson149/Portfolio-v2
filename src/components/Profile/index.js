import React from 'react'
import { ProfileContainer, TextWrapper, ProfileH2, ProfileText, ImgWrapper, ProfileImg } from './ProfileStyled';
import ProfilePic from '../../images/ProfileImg.jpg'

const Profile = () => {
  return (
    <ProfileContainer id='profile'>
      <TextWrapper>
        <ProfileH2>Profile</ProfileH2>
        <ProfileText>
          I recently started studying Front end development and it is the best decision I have made. In High School I studied Media and Graphic design. I have always been interested in technology and design. So now a couple of years after graduating I decided to seek new opportunities. I chose Front end development because it sounded interesting and fun! I like that there is so much to learn and different paths to take with it. Now i'm on my way to my dream job/occupation and feel so excited for the future.
        </ProfileText>
      </TextWrapper>
      <ImgWrapper>
        <ProfileImg src={ProfilePic} />
      </ImgWrapper>
    </ProfileContainer >
  )
}

export default Profile
