import React from 'react'
import styled from 'styled-components'

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  align-items: center;
  text-align: center;
`

const Title = styled.h2`
  font-size: 2rem;
`

const SubTitle = styled.p`
  font-weight: 700;
`

type Props = {
  title: string
  subtitle?: string
}

const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <SectionDiv>
      <Title>{title}</Title>
      {subtitle ? <SubTitle>{subtitle}</SubTitle> : null}
    </SectionDiv>
  )
}

export default SectionTitle
