import React from 'react'
import axios from 'axios'
import Movie from '../components/Movie'
import styles from '../scss/Home.module.scss'

class Home extends React.Component {
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
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
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
        genres={movie.genres}
      />
    ))
  )

  render() {
    const { isLoading, movieList } = this.state
    return (
      <section className={styles.container}>
        {isLoading
          ? (
            <div className={styles.loader}>
              <span className={styles.loader__text}>Loading...</span>
            </div>
          )
          : (
            <div className={styles.movies}>
              {this.renderMovies(movieList)}
            </div>
          )}
      </section>

    )
  }
}

export default Home
