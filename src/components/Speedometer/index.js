import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h2 className="speed">Speed is {count}mph</h2>
        <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            onClick={this.onAccelerate}
            className="button accelerate"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.onBrake} className="button brake">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
