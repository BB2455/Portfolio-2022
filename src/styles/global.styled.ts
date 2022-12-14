import { createGlobalStyle } from 'styled-components'
import theme from '../themes/theme.styled'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #root {
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.font};
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.5;
  }

  .active {
    text-decoration: underline;
  }

  .openNav {
    display: flex;
  }
`
