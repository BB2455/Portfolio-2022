import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 100%;
  flex: 1000 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

const ReturnLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  padding: 0.5rem 2rem;
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
`


const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>Page Not Found😐</h1>
      <ReturnLink to="/">Return To Safety</ReturnLink>
    </Container>
  )
}

export default NotFound
