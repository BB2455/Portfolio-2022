import styled from 'styled-components'
import { device } from '../../styles/devices'

export const NavContainer = styled.nav`
  width: 60rem;
  display: flex;
  justify-content: flex-end;
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

  @media ${device.lg} {
    width: 45rem;
  }

  @media ${device.md} {
    width: 30rem;
    flex-direction: column;
    align-items: flex-end;
  }

  @media ${device.sm} {
    width: 90vw;
  }
`

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: initial;
  @media ${device.md} {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    display: none;
  }
`

export const LinksDiv = styled.div`
  display: flex;
  gap: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  @media ${device.md} {
    flex-direction: column;
  } ;
`

export const SocialLinksDiv = styled(LinksDiv)`
  @media ${device.md} {
    flex-direction: row;
  } ;
`

export const NavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  :hover,
  :focus,
  :focus-visible {
    color: ${(props) => props.theme.colors.tertiary};
  }
  @media ${device.md} {
    display: inline-block;
  }
`
