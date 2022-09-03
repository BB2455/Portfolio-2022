import styled from 'styled-components'

type Props = {
  color?: string
}

export default styled.svg<Props>`
  position: absolute;
  z-index: 5;
  bottom: 0;
  width: 100%;
  fill: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.secondary};
`
