import React from 'react'
import PropTypes from "prop-types"

class SearchBox extends React.Component {
  // searchRef = React.createRef()

  // static propTypes = {
  //   searchRecipe: PropTypes.func
  // }

  // handleSubmit = event => { 
  //   event.preventDefault()
  //   console.log(this.searchRef.current.value)
  //   this.props.searchRecipe(this.searchRef.current.value)
  //   event.currentTarget.reset()
  // }

  render() {
    return (
      <form
        className="w-full max-w-sm py-4"
        onSubmit={this.handleSubmit}
      >
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            ref={this.searchRef}
            type="text"
            placeholder="Enter User Name"
            aria-label="Enter User Name"
          />
          <button className="bg-gray-500 px-4 py-2 text-sm" type="submit">
            Search
          </button>
        </div>
      </form>
     )
  }
}

export default SearchBox
