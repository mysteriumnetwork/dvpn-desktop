import * as React from 'react'
import trans from '../../../trans'

const styles = require('./AppHeader.css')

const AppHeader = () => (
  <div className={styles.appHeader}>
    <div className={styles.tabContainer}>
      <div className={styles.tab}>{trans('app.header.connect.vpn')}</div>
      <div className={styles.tab}>{trans('app.header.provide.vpn')}</div>
    </div>
  </div>
)

export default AppHeader
