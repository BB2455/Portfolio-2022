import React, { useState } from 'react'
import { links } from '../../config/settings'
import { IconLink } from '../shared'
import {
  LinksDiv,
  NavContainer,
  NavToggle,
  NavContent,
  SocialLinksDiv,
} from './nav.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from './NavLink'

const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const toggleNav = () => {
    setNavOpen((prev) => !prev)
  }

  return (
    <NavContainer>
      <NavToggle onClick={toggleNav}>
        {navOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </NavToggle>
      <NavContent className={navOpen ? 'openNav' : ''}>
        <LinksDiv>
          <NavLink to="home">Home</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </LinksDiv>
        <SocialLinksDiv>
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
        </SocialLinksDiv>
      </NavContent>
    </NavContainer>
  )
}

export default Nav
