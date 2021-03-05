import React from 'react'
// import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(props) {
    console.log('constructor() : Start Component Mounting')
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount() : Component finish rendered')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() : Finsih Updated')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() : Component will Unmount')
  }

  add = () => {
    this.setState((cur) => ({ count: cur.count + 1 }))
  }

  minus = () => {
    this.setState((cur) => ({ count: cur.count - 1 }))
  }

  render() {
    console.log('render() : In rendering')
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button type='button' onClick={this.add}>Add</button>
        <button type='button' onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App
