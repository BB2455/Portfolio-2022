import styled from 'styled-components'

type Props = {
  color?: string
}

export default styled.section<Props>`
  width: 100%;
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`
