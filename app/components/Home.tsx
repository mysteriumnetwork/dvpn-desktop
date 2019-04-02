import * as React from 'react'
import { Link } from 'react-router-dom'

const routes = require('../constants/routes.json')
const styles = require('./Home.css')

type Props = {}

const Home = (props: Props) => (
  <div className={styles.container} data-tid="container">
    <h2>Home</h2>
    <Link to={routes.COUNTER}>to Counter</Link>
  </div>
)

export default Home
