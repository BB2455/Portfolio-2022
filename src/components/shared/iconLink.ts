import styled from 'styled-components'

type Props = {
  size?: string
  hoverColor?: string
}

export default styled.a<Props>`
  text-decoration: none;
  font-size: ${(props) => (props.size ? props.size : 'inherit')};
  line-height: initial;
  color: ${(props) => props.theme.colors.white};
  :hover,
  :focus-visible {
    color: ${(props) =>
      props.hoverColor
        ? props.theme.colors[props.hoverColor]
        : props.theme.colors.accent};
  }
`
