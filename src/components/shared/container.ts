import styled from 'styled-components'

type Props = {
  noFlex?: boolean
}

export default styled.div<Props>`
  width: 60rem;
  ${(props) =>
    props.noFlex
      ? null
      : `
  display: flex;
  justify-content: center;
  `}
`
