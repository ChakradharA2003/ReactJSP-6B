// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <div className="item-container">
      <img src={imgUrl} alt={name} className="item-image" />
      <p className="para">{name}</p>
    </div>
  )
}

export default DestinationItem
