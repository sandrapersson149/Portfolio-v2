import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProfileContainer, TextWrapper, ProfileH2, ProfileText, ImgWrapper, ProfileImg } from './ProfileStyled';
import ProfilePic from '../../images/ProfileImg.jpg'
import { useAnimation } from 'framer-motion';



const Profile = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        duration: 1.2
      }
    }
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 120 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        duration: 1.2
      }
    }
  }

  return (
    <ProfileContainer id='profile'>
      <TextWrapper>
        <ProfileH2
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={leftVariants}
        >Profile
        </ProfileH2>
        <ProfileText>
          I recently started studying to become a Front end developer and it's the best decision I've made. In High School I studied Media and Graphic design. I have always been interested in technology and design. Now a couple of years after graduating High School I decided to seek new opportunities. I chose Front end development because it sounded interesting and fun! I like that there is so much to learn and different paths to take with it. Now i'm on my way to my dream job and feel so excited for the future.
        </ProfileText>
      </TextWrapper>
      <ImgWrapper>
        <ProfileImg src={ProfilePic}
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={rightVariants}
        />
      </ImgWrapper>
    </ProfileContainer >
  )
}

export default Profile
