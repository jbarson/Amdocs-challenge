import React from 'react'
import Login from './Login'
import SearchPage from './SearchPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      jsonToken: '',
      loginError: false,
      users: []
    };
  }

  login = (username, credential) => { 
    fetch('http://3.122.7.162:5000/v60/admin/session', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({username, credential})
    })
      .then(data => {
        console.log(data)
        if (!data.ok) { 
          this.setState({loginError: true})
        }
        //Set jsessionId here  
        window.localStorage.setItem('token', data.JSESSIONID)
        //Note, I cannot get the login to work so this may not be the correct object to save
      }) 
      .catch((err) => {
        this.setState({loginError: true})
        console.error(err);
    })
  }

  searchUsers = (user) => {
    fetch(`http://3.122.7.162:5000/v60/admin/search/user?keyword=${user}&alias=false`, {
      'Content-Type': 'application/json',
      'withCredentials': true
    })
      .then(data => {
        console.log(data)
        //again, I do not have access to the endpoint, so setting the users here is made a little difficult
      }) 
      .catch((err) => {
        console.error(err);
    })
  }
  
  render() { 
    return (
      <div className="container mx-auto px-4">
        {this.state.loggedIn ? (
          <SearchPage
            searchUsers={this.searchUsers}
          />
        ) : (
            <Login
              login={this.login}
              error={this.state.loginError}
            />
        )}
      </div>
    );
  }
}

export default App;
