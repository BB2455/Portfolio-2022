import React from 'react'
import { links } from '../../config/settings'
import { IconLink } from '../shared'
import { Container, LinksDiv } from './nav.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from './nav.styled'

const Nav: React.FC = () => {
  return (
    <Container>
      <LinksDiv>
        <NavLink
          href=""
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          tabIndex={0}
        >
          Home
        </NavLink>
        <NavLink
          href=""
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          tabIndex={0}
        >
          Projects
        </NavLink>
        <NavLink
          href=""
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          tabIndex={0}
        >
          About
        </NavLink>
        <NavLink
          href=""
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          tabIndex={0}
        >
          Contact
        </NavLink>
      </LinksDiv>
      <LinksDiv>
        <IconLink
          href={links.gitHub}
          target="_blank"
          rel="noreferrer"
          size="2rem"
          hoverColor="tertiary"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
        <IconLink
          href={links.linkedIn}
          target="_blank"
          rel="noreferrer"
          size="2rem"
          hoverColor="tertiary"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </IconLink>
      </LinksDiv>
    </Container>
  )
}

export default Nav
