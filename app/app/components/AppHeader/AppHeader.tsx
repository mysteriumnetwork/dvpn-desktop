import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_PROVIDER_SETTINGS } from '../../../provider/provider.links'
import { NAV_CLIENT_DASHBOARD } from '../../../client/client.links'
import trans from '../../../trans'
import AppMenu from '../AppMenu/AppMenu'

const styles = require('./AppHeader.scss')

const AppHeader = () => (
  <div className={styles.appHeader}>
    <div className={styles.tabContainer}>
      <Link to={NAV_CLIENT_DASHBOARD}>
        <div className={styles.tab}>{trans('app.header.connect.vpn')}</div>
      </Link>
      <Link to={NAV_PROVIDER_SETTINGS}>
        <div className={styles.tab}>{trans('app.header.provide.vpn')}</div>
      </Link>
    </div>
    <AppMenu />
  </div>
)

export default AppHeader
