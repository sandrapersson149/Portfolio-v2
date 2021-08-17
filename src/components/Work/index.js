import React, { useEffect } from 'react';
import { WorkContainer, TitleWrapper, WorkTitle, WorkInfo, ProjectsContainer, Wrapper, Arrow } from './WorkStyled';
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
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        duration: 0.8
      }
    }
  }
  const secondVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  }
  const thirdVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        duration: 0.8,
        delay: 0.6
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
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={secondVariants}
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
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={thirdVariants}
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

      <WorkInfo>
        <p>Find all my projects at my <a href="https://github.com/sandrapersson149?tab=repositories">Github</a></p>
      </WorkInfo>
    </WorkContainer>

  )
}

export default Work
