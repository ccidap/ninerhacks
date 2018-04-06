import React, { Component } from 'react'

import { Button, Container, Footer, Header, Image, MobileForm, MobileInput, MobileSelect, Subtitle, TextForm, TextInput, TextSelect, Title } from './AppStyles.js'
import helmet from './helmet.svg'

class App extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Image src={helmet} alt='helmet' />
          <Title>niner hacks</Title>
          <Subtitle>february 17-18, Charlotte NC</Subtitle>
        </Header>

        <Footer>
          <form>
            <TextForm>
              I want to be a &nbsp;
              <TextSelect>
                <option disabled selected hidden>select one</option>
                <option>hacker</option>
                <option>sponsor</option>
              </TextSelect>
              
              &nbsp; and my email is <TextInput /> &nbsp;

              <Button>submit</Button>
            </TextForm>

            <MobileForm>
              <MobileSelect>
                <option disabled selected hidden>I want to be a . . .</option>
                <option>hacker</option>
                <option>sponsor</option>
              </MobileSelect>
              <br/><br/>
              <MobileInput type='text' placeholder='email address'/>
              <br/><br/><br/>
              <Button>submit</Button>
            </MobileForm>
          </form>    
        </Footer>    
      </Container>
    )
  }
}

export default App
