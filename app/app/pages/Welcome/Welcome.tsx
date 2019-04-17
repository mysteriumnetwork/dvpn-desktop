import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { NAV_TERMS } from '../../app.links'
import trans from '../../../trans'

const styles = require('./Welcome.css')

const Welcome = () => (
  <div className={styles.appCover}>
    <div className={styles.appBgPattern} />
    <div className={styles.appContent}>
      <div className={styles.logo} />
      <h1>{trans('app.onboarding.welcome')}</h1>
      <h4>{trans('app.onboarding.subtitle')}</h4>
      <Link to={NAV_TERMS}>
        <Button>{trans('app.onboarding.get.started.btn')}</Button>
      </Link>
    </div>
  </div>
)

export default Welcome
