import React from 'react'
import { Background, SectionTitle, Container } from '../shared'
import { Content, Text } from './about.styled'
import { aboutMe } from '../../config/settings'
import Skills from './skills'

const About: React.FC = () => {
  return (
    <>
      <Background color="primary" id="about" style={{paddingBottom: '10rem'}}>
        <Container>
          <SectionTitle title={aboutMe.title} />
          <Content>
            {aboutMe.content.map((text, i) => (
              <Text key={i}>{text}</Text>
            ))}
          </Content>
        </Container>
      </Background>
      <Skills />
    </>
  )
}

export default About
