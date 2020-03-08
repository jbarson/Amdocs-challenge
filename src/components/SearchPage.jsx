import React from 'react'
import PropTypes from "prop-types"

class SearchBox extends React.Component {
  searchRef = React.createRef()

  static propTypes = {
    searchUsers: PropTypes.func
  }

  handleSubmit = event => { 
    event.preventDefault()
    console.log(this.searchRef.current.value)
    this.props.searchUsers(this.searchRef.current.value)
  }

  render() {
    return (
      <div>
        <form
          className="mx-auto p-16 max-w-xl mt-4 bg-orange-500 border-8 border-white"
          onSubmit={this.handleSubmit}
        >
          <h1 className="text-2xl font-hairline px-2">Search User</h1>
          <div className="flex justify-between">
            <input
              className="shadow appearance-none w-1/2 py-1 px-2 mr-4  leading-tight focus:outline-none focus:shadow-outline"
              ref={this.searchRef}
              type="text"
              placeholder="Enter User Name"
              aria-label="Enter User Name"
            />
            <button className="bg-gray-500 px-2 py-1" type="submit">
              Search
            </button>
          </div>
        </form>
        <div className="mx-auto py-8 px-4 max-w-xl mt-4 bg-gray-200 border-8 border-white">
          <h1 className="text-xl font-bold pb-8">SEARCH RESULT FOR: <span className="font-normal">test</span></h1>
          <h2>Users</h2>
          <table className="table-fixed w-full">
            <thead>
              <tr className="bg-gray-600">
                <th className="w-1/2 px-4 py-2 border border-white">Username</th>
                <th className="w-1/4 px-4 py-2 border border-white">Name</th>
                <th className="w-1/4 px-4 py-2 border border-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map(user => (
                <tr className="even:bg-gray-300">
                  <td className="border border-gray-400 px-4 py-2">{user.username}</td>
                <td className="border border-gray-400 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.status}</td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
     )
  }
}

export default SearchBox
