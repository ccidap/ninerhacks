import helmetUrl from '../assets/helmet.svg'
import styled from 'styled-components'

const MOBILE_SIZE = '8rem'
const DESKTOP_SIZE = '12rem'

const Logo = styled.div`
  width: ${MOBILE_SIZE};
  height: ${MOBILE_SIZE};
  background-image: url(${helmetUrl});
  background-repeat: no-repeat;
  background-position: center center;
  @media (${props => props.theme.breakpoints.desktop}) {
    width: ${DESKTOP_SIZE};
    height: ${DESKTOP_SIZE};
  }
`

export default Logo