import React from 'react';
import { WorkContainer, TitleWrapper, WorkTitle, WorkInfo, ProjectsContainer, Wrapper, Arrow } from './WorkStyled';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi'

// const projectVariants = {
//   init: {

//   },
//   animate: {

//   }
// }

const Work = () => {
  return (
    <WorkContainer id='work'>
      <TitleWrapper>
        <WorkTitle>Work</WorkTitle>
        <WorkInfo>
          <p>Find all my projects at <a href="https://github.com/sandrapersson149?tab=repositories">Github</a></p>
        </WorkInfo>
      </TitleWrapper>

      <ProjectsContainer>
        <motion.div
          whileHover={{ scale: 1.2, color: '#54C6CD' }}>
          <h2>Team project - SunStats</h2>
          <Wrapper>
            <p>A group project from school. We made a travel weather app.</p>
            <motion.a href="https://github.com/sandrapersson149/fe_20tp_bev_group6"
              whileHover={{ scale: 1.5, opacity: 0.5 }}>
              <Arrow /></motion.a>
          </Wrapper>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, color: '#54C6CD' }}>
          <h2>React app - BurgerAndBeans</h2>
          <Wrapper>
            <p>A side project I made to learn more about React and animations.</p>
            <motion.a href="https://github.com/sandrapersson149/BurgerAndBeans"
              whileHover={{ scale: 1.5, opacity: 0.5 }}>
              <Arrow /></motion.a>
          </Wrapper>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, color: '#54C6CD' }}>
          <h2>AwesomeCake - My first project</h2>
          <Wrapper>
            <p>This is my first HTML/CSS project from school.</p>
            <motion.a href="https://github.com/sandrapersson149/awesomecake-ip1"
              whileHover={{ scale: 1.5, opacity: 0.5 }}>
              <Arrow /></motion.a>
          </Wrapper>
        </motion.div>

      </ProjectsContainer>
    </WorkContainer>

  )
}

export default Work
