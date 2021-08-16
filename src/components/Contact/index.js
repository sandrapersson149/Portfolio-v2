import React from 'react'
import { ContactContainer, ContactTitel, ContactInfo, Wrapper, IconButton, GithubIcon, LinkedInIcon, MailIcon } from './ContactStyled'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <ContactContainer id="contact">

      <ContactTitel>Contact</ContactTitel>
      <ContactInfo>Want to get in touch with me? Use the links below!</ContactInfo>

      <Wrapper>
        <IconButton href="https://github.com/sandrapersson149?tab=repositories">
          <GithubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/sandra-persson-660b551b5/">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="mailto:sandrapersson.dev@gmail.com">
          <MailIcon />
        </IconButton>
      </Wrapper>

    </ContactContainer>
  )
}

export default Contact
