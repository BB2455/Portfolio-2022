import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  flex: 1 1;
`

export const ProjectPicture = styled.picture`
  flex: 1 1;
`

export const ProjectContent = styled.article`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 1rem;
  padding: 1rem 2rem;
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
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
