import styled from 'styled-components'
import { Background } from '../shared'
import { device } from '../../styles/devices'

export const ProjectsBackground = styled(Background)`
  position: relative;
  padding-bottom: 12rem;
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding-top: 4rem;
`

export const ProjectButton = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.accent};
  font-weight: 700;
  font-size: 1.5rem;
  border: 4px solid ${(props) => props.theme.colors.accent};
  padding: 1rem 2.5rem;
  border-radius: 16px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  :hover,
  :focus,
  :focus-visible {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.accent};
  }
  @media ${device.md} {
    padding: 0.5rem 1.5rem;
  }
`