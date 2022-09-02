import styled from 'styled-components'
import container from '../shared/container'
import { Link } from 'react-scroll'

export const Container = styled(container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 4rem;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: 4px solid ${(props) => props.theme.colors.white};
  backdrop-filter: blur(100px);
  color: ${(props) => props.theme.colors.white};
  z-index: 999;
`

export const LinksDiv = styled.div`
  display: flex;
  gap: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`

export const NavLink = styled(Link)`
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
