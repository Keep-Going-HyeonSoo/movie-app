import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../scss/Navigation.module.scss'

function Navigation() {
  return (
    <div className={styles.nav}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Navigation
