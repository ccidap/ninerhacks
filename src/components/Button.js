import { css } from 'styled-components'
import Textbox from './Textbox'

const Button = Textbox.withComponent('button').extend`
  background: ${props => props.theme.colors.accent};
  color: #a28543;
  opacity: 0.5;
  cursor: not-allowed;
  text-transform: uppercase;
  font-size: 1rem;
  transition: transform 100ms;
  ${props => props.disabled || css`
    opacity: 1;
    cursor: pointer;
  `}
  &:focus {
    transform: scale(0.95);
  }
  &:active {
    transform: scale(0.9);
  }
`

export default Button