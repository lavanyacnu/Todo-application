import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The button has been clicked <br />
          <span className="span">{count} </span>
          times
        </h1>
        <p className="description">click the button to increase the count!</p>
        <div className="button-container">
          <button className="button" type="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
