import styled from 'styled-components'

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 3.5rem;
  @media (${props => props.theme.breakpoints.desktop}) {
    font-size: 4.5rem;
  }
`

export default Title