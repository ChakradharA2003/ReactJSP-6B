// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onFilterDestinations = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchedDestinations = destinationsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            value={searchInput}
            type="search"
            className="input-style"
            placeholder="Search"
            onChange={this.onFilterDestinations}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
        </div>
        <ul className="initial-lists">
          {searchedDestinations.map(eachItem => (
            <DestinationItem
              imgUrl={eachItem.imgUrl}
              name={eachItem.name}
              id={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
