import React, { Component } from 'react'
import { Container, Header, SearchBar, UsersContainer } from './styles'
import UserCard from './components/UserCard'
import { Query } from 'react-apollo'
import GET_USERS from './queries'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <SearchBar
            classname="serachbar"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </Header>
        <Query query={GET_USERS} variables={{ name: this.state.searchText }}>
          {({ loading, error, data }) => {
            if (loading) return null
            if (error) return `Error!: ${error}`
            return (
              <Container>
                <UsersContainer>
                  {data.users.map(user => (
                    <UserCard image={user.picture} name={user.name} />
                  ))}
                </UsersContainer>
              </Container>
            )
          }}
        </Query>
      </React.Fragment>
    )
  }
}

export default Users
