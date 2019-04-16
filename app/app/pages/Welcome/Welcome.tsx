import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_TERMS } from '../../app.links'
import injectSheet from 'react-jss'
import trans from '../../../trans'
const styles = require('./Welcome.css');


const Welcome = () => (
  <div className={styles.appCover}>
    <div className={styles.appBgPattern}></div>
    <div className={styles.appContent}>
      <div className={styles.logo}/>
      <h1>{trans('app.onboarding.welcome')}</h1>
      <h4>{trans('app.onboarding.subtitle')}</h4>
      <Link to={NAV_TERMS}>{trans('app.onboarding.get.started.btn')}</Link>
    </div>
  </div>
)

export default injectSheet(styles)(Welcome)
