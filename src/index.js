import { render } from 'react-dom'
import React from 'react'

import Content from './components/Content'
import Layout from './components/Layout'
import Logo from './components/Logo'
import Main from './components/Main'
import Space from './components/Space'
import Text from './components/Text'
import Theme from './components/Theme'
import Title from './components/Title'
import Form from './components/Form'
import Footer from './components/Footer'

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
          <Space n={2} />
        </Content>
      </Main>
    </Layout>
  </Theme>
)

render(<App />, document.querySelector('#root'))