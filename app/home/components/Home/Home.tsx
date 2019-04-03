import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_COUNTER } from '../../../counter/counter.navlink'

const styles = require('./Home.css')

type Props = {}

const Home = (props: Props) => (
  <div className={styles.container} data-tid="container">
    <h2>Home</h2>
    <Link to={NAV_COUNTER.path}>to Counter</Link>
  </div>
)

export default Home
