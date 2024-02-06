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
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredDestinations = destinationsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )
  }

  render() {
    const {destinationsList} = this.props
    const initialList = destinationsList
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            value={searchInput}
            type="text"
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
        <div className="initial-lists">
          {initialList.map(eachItem => (
            <DestinationItem imgUrl={eachItem.imgUrl} name={eachItem.name} />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
