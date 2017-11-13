import React from 'react'

class ClickCounter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 }
  }
  
  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.click.bind(this)}>CLICK ME!</button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}

export default ClickCounter;