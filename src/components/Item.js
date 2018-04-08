import Textbox from './Textbox'

const Item = Textbox.withComponent('button').extend`
  color: rgba(255,255,255,0.5);
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  user-select: none;
  transition: transform 100ms;
  &:last-child {
    margin-left: 0.5rem;
  }
  ${props => props.active && `
    background: rgba(255, 255, 255, 0.25);
    color: ${props.theme.colors.accent};
  `}
  &:focus {
    transform: scale(0.95);
    ${props => props.active && `
      transform: scale(1);
    `}
  }
`

export default Item;