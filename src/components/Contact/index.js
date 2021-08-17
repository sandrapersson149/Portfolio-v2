import React, { useEffect } from 'react';
import { ContactContainer, ContactTitel, ContactInfo, Wrapper, IconButton, GithubIcon, LinkedInIcon, MailIcon } from './ContactStyled'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Contact = () => {

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

  const firstVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

  const secondVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      }
    }
  }

  const thirdVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      }
    }
  }

  return (
    <>
      <ContactContainer id="contact">

        <ContactTitel>Contact</ContactTitel>
        <ContactInfo>Want to get in touch with me? Use the links below!</ContactInfo>

        <Wrapper>
          <IconButton
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={firstVariants}
            href="https://github.com/sandrapersson149?tab=repositories">
            <GithubIcon />
          </IconButton>
          <IconButton
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={secondVariants}
            href="https://www.linkedin.com/in/sandra-persson-660b551b5/">
            <LinkedInIcon />
          </IconButton>
          <IconButton
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={thirdVariants}
            href="mailto:sandrapersson.dev@gmail.com">
            <MailIcon />
          </IconButton>
        </Wrapper>

      </ContactContainer>
    </>
  )
}

export default Contact
