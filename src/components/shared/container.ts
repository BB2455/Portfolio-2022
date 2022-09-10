import styled from 'styled-components'
import { device } from '../../styles/devices'

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
  
  @media ${device.lg} {
    width: 45rem;
  }

  @media ${device.md} {
    width: 30rem;
  }

  @media ${device.sm} {
    width: 90vw;
  }
`
