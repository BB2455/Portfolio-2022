import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  children: string
}

const Text = styled.p`
  display: inline;
  width: 100%;
`

const ShowButton = styled.button`
  border: none;
  background: unset;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
`

const ShowMore: React.FC<Props> = ({ children }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore((prev) => !prev)
  }
  return (
    <Text>
      {isReadMore ? text.slice(0, 150) : text}
      <ShowButton onClick={toggleReadMore} tabIndex={0}>
        {isReadMore ? '... read more' : ' show less'}
      </ShowButton>
    </Text>
  )
}

export default ShowMore
