import { render } from 'react-dom'
import React from 'react'
import styled from 'styled-components'

import Content from './components/Content'
import Layout from './components/Layout'
import Logo from './components/Logo'
import Main from './components/Main'
import Space from './components/Space'
import Text from './components/Text'
import Textbox from './components/Textbox'
import Theme from './components/Theme'
import Title from './components/Title'
import Form from './components/Form'

const FooterWrapper = styled.footer`
  color: #333;
  text-align: center;
  padding: 1rem;
  a {
    font-weight: bold;
    color: ${props => props.theme.colors.main};
  }
  p:not(:last-child) {
    margin-bottom: 0.25rem;
  }
`

const Footer = () => (
  <FooterWrapper>
    <p>
      © 2018 NinerHacks. Hosted by the <a href='http://www.ccidap.com/' target='_blank'>
        CCI Dean's Ambassador Program
      </a> at UNC Charlotte.
    </p>
    <p>
      Questions? Email us at <a href='mailto:ccidap.uncc@gmail.com'>ccidap.uncc@gmail.com</a>.
    </p>
  </FooterWrapper>
)

const App = () => (
  <Theme>
    <Layout footer={Footer}>
      <Main>
        <Content>
          <Logo />
          <Title>niner hacks</Title>
          <Text accent>September 2018</Text>
          <Space n={2} />
          <Form />
        </Content>
      </Main>
    </Layout>
  </Theme>
)

render(<App />, document.querySelector('#root'))