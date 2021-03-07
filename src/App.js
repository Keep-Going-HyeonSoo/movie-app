import React from 'react'
import axios from 'axios'
import Movie from './Movie'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      movieList: []
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')
    this.setState({ movieList: movies.data.data.movies, isLoading: false })
  }

  renderMovies = (movieList) => (
    movieList.map((movie) => (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
      />
    ))
  )

  render() {
    const { isLoading, movieList } = this.state
    return (
      <div>
        <div>{isLoading ? 'Loading...' : this.renderMovies(movieList)}</div>
      </div>
    )
  }
}

export default App
