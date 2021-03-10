import React from 'react'
import styles from '../scss/Movie.module.scss'
import stylesHome from '../scss/Home.module.scss'

class Detail extends React.Component {
  componentDidMount() {
    const { location: { state }, history } = this.props
    if (!state) {
      history.push('/')
    }
  }

  render() {
    const { location: { state: data } } = this.props
    if (!data) {
      return null
    }

    return (
      <div className={stylesHome.movies}>
        <div className={styles.movie}>
          <img
            className={styles.movie__poster}
            src={data.poster}
            alt={data.title}
            title={data.title}
          />
          <h3 className={styles.movie__title}>{data.title} ({data.year})</h3>
          <ul className={styles.movie__genres}>
            {data.genres.map((genre) => (
              <li
                key={genre.toString()}
                className={styles.movie__genres__genre}
              >
                {genre}
              </li>
            ))}
          </ul>
          <p className={styles.movie__summary}>{data.summary}</p>
        </div>
      </div>
    )
  }
}

export default Detail
