import React, { useEffect } from 'react';
import {
  WorkContainer,
  TitleWrapper,
  WorkTitle,
  WorkInfo,
  ProjectsContainer,
  Wrapper
} from './WorkStyled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Work = () => {

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
        duration: 1.2,
        delay: 0.5
      }
    }
  }
  const thirdVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 1
      }
    }
  }

  return (
    <WorkContainer id='work'>
      <TitleWrapper>
        <WorkTitle>Work</WorkTitle>
        <h3>Some of my projects:</h3>
      </TitleWrapper>
      <ProjectsContainer>

        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={firstVariants}
          whileHover={{ color: '#54C6CD' }}>
          <motion.a href="https://github.com/sandrapersson149/fe_20tp_bev_group6"
            whileHover={{ textDecoration: 'underline' }}
          >SunStats</motion.a>
          <Wrapper>
            <p>Team project - A group project from school. We made a travel weather app.</p>
          </Wrapper>
        </motion.div>

        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={secondVariants}
          whileHover={{ color: '#54C6CD' }}>
          <motion.a href="https://github.com/sandrapersson149/BurgerAndBeans"
            whileHover={{ textDecoration: 'underline' }}
          >BurgerAndBeans</motion.a>
          <Wrapper>
            <p>React app - A side project I made to learn more about React and animations.</p>
          </Wrapper>
        </motion.div>

        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={thirdVariants}
          whileHover={{ color: '#54C6CD' }}>
          <motion.a href="https://github.com/sandrapersson149/awesomecake-ip1"
            whileHover={{ textDecoration: 'underline' }}
          >AwesomeCake</motion.a>
          <Wrapper>
            <p>First school project - This was my first HTML/CSS project from school.</p>
          </Wrapper>
        </motion.div>

      </ProjectsContainer>

      <WorkInfo>
        <p>Find all my projects at my <a href="https://github.com/sandrapersson149?tab=repositories">Github</a></p>
      </WorkInfo>
    </WorkContainer>
  )
}

export default Work
