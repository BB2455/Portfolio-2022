import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const ScrollLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  :hover,
  :focus,
  :focus-visible {
    color: ${(props) => props.theme.colors.tertiary};
  }
`

type Props = {
  to: string
  children: string
  onClick?: () => void
}

export const NavLink: React.FC<Props> = ({ to, children, onClick }) => {
  return (
    <ScrollLink
      href=""
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      tabIndex={0}
      offset={-150}
      onClick={onClick}
    >
      {children}
    </ScrollLink>
  )
}
