import styled from 'styled-components'

type Props = {
  noFlex?: boolean
  nav?: boolean
}

export default styled.div<Props>`
  width: 60rem;
  ${(props) =>
    props.noFlex
      ? null
      : `
  display: flex;
  `}
  ${(props) =>
    props.nav
      ? null
      : `
    align-items: center;
    flex-direction: column;
    `}
`
