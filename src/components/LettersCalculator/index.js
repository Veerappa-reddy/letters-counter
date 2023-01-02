import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onLetterCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="letters-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="enter-input" htmlFor="inputElement">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input-element"
              onChange={this.onLetterCount}
              id="inputElement"
            />
          </div>
          <div className="button">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
