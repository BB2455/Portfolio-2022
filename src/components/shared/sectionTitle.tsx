import React from 'react'
import styled from 'styled-components'

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  align-items : center;
`

const Title = styled.h2`
  font-size: 2rem;
`

const SubTitle = styled.h4``

type Props = {
  title: string
  subtitle: string
}

const sectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <SectionDiv>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </SectionDiv>
  )
}

export default sectionTitle
