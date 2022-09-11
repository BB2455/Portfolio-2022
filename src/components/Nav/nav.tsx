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

  const closeNavIfOpen = () => (navOpen ? toggleNav() : null)

  return (
    <NavContainer>
      <NavToggle
        onClick={toggleNav}
        aria-label={navOpen ? 'Close Nav Menu' : 'Open Nav Menu'}
        title={navOpen ? 'Close' : 'Open'}
      >
        {navOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </NavToggle>
      <NavContent className={navOpen ? 'openNav' : ''}>
        <LinksDiv>
          <NavLink to="home" onClick={closeNavIfOpen}>
            Home
          </NavLink>
          <NavLink to="projects" onClick={closeNavIfOpen}>
            Projects
          </NavLink>
          <NavLink to="about" onClick={closeNavIfOpen}>
            About
          </NavLink>
          <NavLink to="contact" onClick={closeNavIfOpen}>
            Contact
          </NavLink>
        </LinksDiv>
        <SocialLinksDiv>
          <IconLink
            href={links.gitHub}
            target="_blank"
            rel="noreferrer"
            size="2rem"
            hoverColor="tertiary"
            aria-label="Check out my GitHub"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
          <IconLink
            href={links.linkedIn}
            target="_blank"
            rel="noreferrer"
            size="2rem"
            hoverColor="tertiary"
            aria-label="Connect with me on LinkedIn"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
        </SocialLinksDiv>
      </NavContent>
    </NavContainer>
  )
}

export default Nav
