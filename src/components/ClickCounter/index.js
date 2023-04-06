// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  // initialize state object
  state = {count: 0}

  onIncrement = () => {
    // updating state object
    this.setState(prevState => {
      console.log(`previous State value is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    // object destructuring
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="title">
          The Button has been Clicked <span className="span">{count}</span>{' '}
          times
        </h1>
        <p className="description">click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
