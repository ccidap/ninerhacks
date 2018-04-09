import styled from 'styled-components'

const Textbox = styled.input`
  width: 20rem;
  max-width: 100%;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  outline: 0;
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.accent};
  font-weight: bold;
  text-align: center;
  &::placeholder {
    color: white;
    opacity: 0.5;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`

export default Textbox