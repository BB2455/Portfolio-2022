import styled from 'styled-components'
import { device } from '../../../styles/devices'

export const ProjectContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  @media ${device.md} {
    grid-auto-flow: row;
  }
`

export const ProjectPicture = styled.picture`
  img {
    height: auto;
    max-width: 100%;
  }
`

export const ProjectContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  @media ${device.md} {
    align-items: center;
  }
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const ProjectLink = styled.a`
  padding: 1rem 2rem;
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 700;
  :hover,
  :focus-visible {
    background: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.black};
  }
`
