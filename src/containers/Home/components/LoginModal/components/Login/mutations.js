import gql from 'graphql-tag'

const LOGIN_USER = gql`
  mutation loginUser($loginUserInput: LoginUserInput!) {
    loginUser(input: $loginUserInput) {
      error
      user {
        id
      }
      token
    }
  }
`
export default LOGIN_USER
