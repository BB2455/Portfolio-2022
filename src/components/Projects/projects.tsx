import React from 'react'
import {
  ProjectsBackground,
  ProjectsContainer,
  ProjectButton,
} from './projects.styled'
import { Container, SvgTriangle, SectionTitle } from '../shared'
import Project from './Project/project'
import { projects } from '../../config/settings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { links } from '../../config/settings'

const Projects: React.FC = () => {
  return (
    <ProjectsBackground id="projects" color="secondary">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Here are a few past projects I've worked on"
        />
        <ProjectsContainer>
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              github={project.github}
              liveSite={project.liveSite}
              img={project.img}
            />
          ))}
          <ProjectButton href={links.gitHub} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            See more on GitHub
          </ProjectButton>
        </ProjectsContainer>
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
