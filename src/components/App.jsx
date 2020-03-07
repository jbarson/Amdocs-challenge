import React from 'react'
import Login from './Login'
import SearchPage from './SearchPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      page: 1,
      recipe: 'Omelet',
    };
  }
  fetchItems = (recipe, page) => { 
    fetch(`http://www.recipepuppy.com/api/?q=${recipe}&p=${page}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  turnPage = (increment) => { 
    const newPage = this.state.page + increment
    if (newPage > 0) { 
      this.setState({
        page: newPage
      })
      this.fetchItems(this.state.recipe, newPage)
    }
  }
  searchRecipe = (search) => { 
    this.fetchItems(search, this.state.page)
    this.setState({
        recipe: search
      })
  }
  componentDidMount() {
    // this.fetchItems(this.state.recipe, this.state.page)
  }
  render() { 
    return (
      <div className="container mx-auto px-4">
        {/* <Login /> */}
        <SearchPage />
        {/* <SearchBox
          searchRecipe={this.searchRecipe}
        />
        <RecipeList
          items={this.state.items}
          error={this.state.error}
          isLoaded={this.state.isLoaded}
          page={this.state.page}
          turnPage={this.turnPage}
        /> */}
      </div>
    );
  }
}

export default App;
