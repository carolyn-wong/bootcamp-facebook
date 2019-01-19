import React, { Component } from 'react'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'
import { Mutation } from 'react-apollo'
import LOGIN_USER from './mutations'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Title>Welcome Back!</Title>
        <LineInput
          placeholder="Email"
          onChange={e => this.onChange('email', e)}
        />
        <LineInput
          placeholder="Password"
          onChange={e => this.onChange('password', e)}
          type="password"
        />

        {/* new code start */}
        <Mutation
          mutation={LOGIN_USER}
          variables={{ loginUserInput: this.state }}
        >
          {loginUser => (
            <SubmitButton onClick={loginUser}> Login </SubmitButton>
          )}
        </Mutation>

        {/* new code end */}

        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Sign Up
        </SecondaryOptionText>
      </React.Fragment>
    )
  }
}

export default Login
