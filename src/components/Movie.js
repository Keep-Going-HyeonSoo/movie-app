import React from 'react'
import PropTypes from 'prop-types'
import styles from '../scss/Movie.module.scss'

function Movie({
  year, title, summary, poster, genres
}) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__poster} src={poster} alt={title} title={title} />
      <h3 className={styles.movie__title}>{title} ({year})</h3>
      <ul className={styles.movie__genres}>
        {genres.map((genre) => (
          <li
            key={genre.toString()}
            className={styles.movie__genres__genre}
          >
            {genre}
          </li>
        ))}
      </ul>
      {
        summary.length > 200
          ? <p className={styles.movie__summary}>{summary.slice(0, 200)}...</p>
          : <p className={styles.movie__summary}>{summary}</p>
      }
    </div>
  )
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie
