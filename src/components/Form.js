import React, { Component, Fragment } from 'react'
import validator from 'email-validator'
import { signUp } from '../util/forms'

import Space from './Space'
import Text from './Text'
import Textbox from './Textbox'
import Item from './Item'
import ItemGroup from './ItemGroup'
import Button from './Button'

class Form extends Component {
  state = {
    role: null,
    email: '',
    isSubmitted: false
  }
  get isValid() {
    return !!this.state.role && validator.validate(this.state.email)
  }
  select = role => {
    this.setState({ role: role.toLowerCase() })
  }
  handleEmailChange = email => {
    this.setState({ email })
  }
  submit = async () => {
    if (this.isValid) {
      await signUp(this.state.email, this.state.role)
      this.setState({ isSubmitted: true })
    }
  }
  renderForm() {
    return (
      <Fragment>
        <Text>Interesed in attending?</Text>
        <Space />
        <Textbox
          type='email'
          placeholder='Email address'
          value={this.state.email}
          onChange={event => this.handleEmailChange(event.target.value)}
        />
        <Space />
        <ItemGroup>
          {['Hacker', 'Sponsor'].map(role => (
            <Item
              key={role}
              active={role.toLowerCase() === this.state.role}
              onClick={() => this.select(role)}>
                I'm a {role}
            </Item>
          ))}
        </ItemGroup>
        <Space />
        <Button disabled={!this.isValid} onClick={this.submit}>
          Keep Me Updated
        </Button>
      </Fragment>
    )
  }
  renderSuccess() {
    return (
      <Fragment>
        <Text>Awesome! Look out for an email from us soon.</Text>
      </Fragment>
    )
  }
  render() {
    return this.state.isSubmitted ? this.renderSuccess() : this.renderForm()
  }
}

export default Form