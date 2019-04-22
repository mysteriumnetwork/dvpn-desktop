import * as React from 'react'
import trans from '../../../trans'
import AppMenu from '../AppMenu/AppMenu'

const styles = require('./AppHeader.scss')

const AppHeader = () => (
  <div className={styles.appHeader}>
    <div className={styles.tabContainer}>
      <div className={styles.tab}>{trans('app.header.connect.vpn')}</div>
      <div className={styles.tab}>{trans('app.header.provide.vpn')}</div>
    </div>
    <AppMenu />
  </div>
)

export default AppHeader
