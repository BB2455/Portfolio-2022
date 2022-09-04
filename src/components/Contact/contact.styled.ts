import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const IconLinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`

export const Link = styled.a`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 700;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  :hover {
    text-decoration: underline;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
`
