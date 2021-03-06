import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')
    console.log(movies)
  }

  render() {
    const { isLoading } = this.state
    return (
      <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
    )
  }
}

export default App
