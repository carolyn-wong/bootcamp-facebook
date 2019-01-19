import gql from 'graphql-tag'

const LOGIN_USER = gql`
  mutation loginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      error
      user {
        id
      }
      token
    }
  }
`
export default LOGIN_USER
