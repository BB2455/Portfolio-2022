import React from 'react'
import { ProjectsBackground } from './projects.styled'
import { Container, SvgTriangle, SectionTitle } from '../shared'

const Projects: React.FC = () => {
  return (
    <ProjectsBackground id="projects" color="secondary">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Here are a few past projects I've worked on"
        />
      </Container>
      <SvgTriangle
        width="100%"
        height="12rem"
        viewBox="0 0 100 100"
        x="0"
        y="0"
        preserveAspectRatio="none"
        color="primary"
      >
        <polygon points="0,100 100,100 100,0" />
      </SvgTriangle>
    </ProjectsBackground>
  )
}

export default Projects
