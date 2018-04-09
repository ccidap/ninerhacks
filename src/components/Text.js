import Title from './Title'

const Text = Title.withComponent('span').extend`
  font-size: 1.5rem;
  text-align: center;
  @media (${props => props.theme.breakpoints.desktop}) {
    font-size: 1.75rem;
  }
  ${props => props.accent && `
    color: ${props.theme.colors.accent};
  `}
`

export default Text