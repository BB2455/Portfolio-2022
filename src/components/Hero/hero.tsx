import React from 'react'
import {
  Background,
  ActionDiv,
  HeroDiv,
  Greeting,
  Text,
  ActionButton,
  AnimationText,
} from './hero.styled'
import { Container, SvgTriangle } from '../shared'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Hero: React.FC = () => {
  return (
    <Background id="home">
      <HeroDiv>
        <Container noFlex>
          <Greeting>Hello! 👋</Greeting>
          <Text>I'm Blair Burke</Text>
          <Text>A Full-stack Web Developer</Text>
        </Container>
      </HeroDiv>
      <ActionDiv>
        <Container style={{ position: 'relative' }}>
          <ActionButton
            href=""
            to="projects"
            smooth={true}
            duration={500}
            tabIndex={0}
            offset={-150}
          >
            Projects
          </ActionButton>
          <AnimationText>
            <FontAwesomeIcon icon={faAngleDown} />
            {` Scroll Down `}
            <FontAwesomeIcon icon={faAngleDown} />
          </AnimationText>
        </Container>
      </ActionDiv>
      <SvgTriangle
        width="100%"
        height="12rem"
        viewBox="0 0 100 100"
        x="0"
        y="0"
        preserveAspectRatio="none"
      >
        <polygon points="0,100 100,100 100,0" />
      </SvgTriangle>
    </Background>
  )
}

export default Hero
