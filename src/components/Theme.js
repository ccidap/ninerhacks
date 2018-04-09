import { ThemeProvider, injectGlobal } from 'styled-components'
import React, { Component } from 'react'

class Styles extends Component {
  theme = {
    colors: {
      main: '#5659c9',
      accent: '#ffdc65'
    },
    breakpoints: {
      desktop: 'min-width: 970px'
    }
  }
  componentDidMount() {
    injectGlobal`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
      }
    `
  }
  render() {
    return (
      <ThemeProvider theme={this.theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

export default Styles