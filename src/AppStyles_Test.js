import styled from 'styled-components'

import bg from './bg3.svg'

const _color_dark_grey = '#333333'
const _color_light_grey = '#c7c1bc'

const _color_dark_brown = '#736357'

const _color_light_yellow = '#ffdc64'
const _color_dark_yellow = '#ffc850'

export const Container = styled.div`
  color: ${_color_dark_grey};
  background: ${_color_dark_brown};
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  text-align: center;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Header = styled.div``

export const Footer = styled.div``

export const Image = styled.img`
  width: 15%;
  
  @media only screen and (max-width: 767px) {
      width: 30%;
  }
`

export const Title = styled.h1`
  font-size: 4.5em;
  margin: 0;

  @media only screen and (max-width: 767px) {
      font-size: 3em;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${_color_light_grey};
  margin: 0;

  @media only screen and (max-width: 767px) {
      width: 80%;
      margin: auto;
  }
`

export const TextForm = styled.span`
  font-size: 2em;

  @media only screen and (max-width: 767px) {
      display: none;
  }
`

export const TextSelect = styled.select`
  font-size: 1em;
  color: ${_color_light_yellow};
  font-weight: bold;
  background: transparent;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
  border-bottom: 3px solid ${_color_light_yellow};
  outline: none;
`

export const TextInput = styled.input`
  font-size: 1em;
  color: ${_color_light_yellow};
  font-weight: bold;
  background: transparent;
  border: none;
  border-bottom: 3px solid ${_color_light_yellow};
  outline: none;
`

export const MobileForm = styled.span`
  display: none;

  @media only screen and (max-width: 767px) {
      display: block;
  }
`

export const MobileSelect = styled.select`
  font-size: 1.5em;
  color: ${_color_dark_grey};
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 3px;
  outline: none;
  width: 80%;
  padding: 5px 10px;
`

export const MobileInput = styled.input`
  font-size: 1.5em;
  color: ${_color_dark_grey};
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 3px;
  outline: none;
  width: 74%;
  padding: 5px 10px;
`

export const Button = styled.a`
  background: ${_color_light_yellow};
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 5px;
  border: none;
  box-shadow: 0 6px ${_color_dark_yellow};
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 1px;
  outline: none;
  position: relative;
  text-transform: uppercase;
`