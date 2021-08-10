import React from 'react'
import { WorkContainer, TitleWrapper, WorkTitle, WorkInfo, ProjectsContainer, Project, Arrow } from './WorkStyled'
import Work1 from '../../images/awsomecake2.PNG'
import { motion } from 'framer-motion'


function Detail({ title, desc }) {
  return (
    <Project className="details">
      <h3>{title}</h3>
      <p>{desc}</p>
      <Arrow />
    </Project>
  );
}

const hover = {
  scaleX: 1.5,
  scaleY: 1.5,
  filter: "brightness(1)",
  transition: {
    duration: 0.3,
    ease: "linear",
  },
};

const zoom = {
  initial: { filter: "brightness(0.40)" },
  animate: { transition: { duration: 1.8 } },
};


// använd usestate för att sätte ett state för när man öppnar bilden. 

const Work = () => {
  return (
    <WorkContainer id='work'>
      <TitleWrapper>
        <WorkTitle>Work</WorkTitle>
      </TitleWrapper>
      <WorkInfo>Some of the projects I have worked on</WorkInfo>
      <ProjectsContainer>
        <div>
          <motion.img src={Work1}
            variants={zoom}
            initial="initial"
            animate="animate"
            whileHover={hover}
          ></motion.img>
          <Detail title="AwsomeCake" desc="My first project" />
        </div>
        <div>
          <img src={Work1}></img>
          <Detail title="AwsomeCake" desc="My first project" />
        </div>
        <div>
          <img src={Work1}></img>
          <Detail title="AwsomeCake" desc="My first project" />
        </div>
        <div>
          <img src={Work1}></img>
          <Detail title="AwsomeCake" desc="My first project" />
        </div>

      </ProjectsContainer>
    </WorkContainer>

  )
}

export default Work
