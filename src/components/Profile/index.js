import React from 'react'
import { ProfileContainer, TextWrapper, ProfileH2, ProfileText, ImgWrapper, ProfileImg } from './ProfileStyled';
import ProfilePic from '../../images/ProfileImg.jpg'

const Profile = () => {

  return (
    <ProfileContainer id='profile'>
      <TextWrapper>
        <ProfileH2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >Profile</ProfileH2>
        <ProfileText>
          I recently started studying to become a Front end development and it's the best decision I have made. In High School I studied Media and Graphic design. I have always been interested in technology and design. Now a couple of years after graduating High School I decided to seek new opportunities. I chose Front end development because it sounded interesting and fun! I like that there is so much to learn and different paths to take with it. Now i'm on my way to my dream job and feel so excited for the future.
        </ProfileText>
      </TextWrapper>
      <ImgWrapper>
        <ProfileImg src={ProfilePic}
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        />
      </ImgWrapper>
    </ProfileContainer >
  )
}

export default Profile
