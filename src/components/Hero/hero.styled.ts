import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'
import { device } from '../../styles/devices'

export const Background = styled.section`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    '.'
    'hero'
    'action';
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
`

export const HeroDiv = styled.div`
  grid-area: hero;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ActionDiv = styled.div`
  grid-area: action;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2rem;
`

export const Greeting = styled.h1`
  font-size: 5rem;
  @media ${device.md} {
    font-size: 4rem;
  }
  @media ${device.sm} {
    font-size: 3rem;
  }
`

export const Text = styled.h2`
  font-size: 3rem;
  @media ${device.md} {
    font-size: 2rem;
  }
  @media ${device.sm} {
    font-size: 1.5rem;
  }
`

export const ActionButton = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.accent};
  font-weight: 700;
  font-size: 1.5rem;
  border: 4px solid ${(props) => props.theme.colors.accent};
  padding: 1rem 2.5rem;
  border-radius: 16px;
  z-index: 10;
  cursor: pointer;
  :hover,
  :focus,
  :focus-visible {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.accent};
  }
`
const scrollAnimation = keyframes`
  0% {bottom: -80%}
  30%, 100% {bottom: -100%}
`

export const AnimationText = styled.p`
  user-select: none;
  font-size: 1.5rem;
  font-weight: 700;
  position: absolute;
  bottom: -80%;
  z-index: 10;
  animation: ${scrollAnimation} 4s ease-out infinite;
`
