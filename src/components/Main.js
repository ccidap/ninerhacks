import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.main};
  height: 100%;
  flex: 1;
  justify-content: flex-start;
  padding: 1rem 0;
`

export default Main