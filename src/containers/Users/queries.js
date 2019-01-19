import gql from 'graphql-tag'

const GET_USERS = gql`
  query users($name: String) {
    users(name: $name) {
      id
      name
      picture
    }
  }
`
export default GET_USERS
