import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_CLIENT_CONNECTING } from '../../client.links'
// import trans from '../../../trans'
import Button from '../../../ui-kit/components/Button/Button'
import SideBar from './components/SideBar/SideBar'

const styles = require('./ClientDashboard.scss')

const ClientDashboard = () => (
  <div className={styles.dashboardCover}>
    <SideBar />
    <div>
      <b>ClientConnected</b>
      <Link to={NAV_CLIENT_CONNECTING}>
        <Button variant="contained" color="secondary">
          Disconnect
        </Button>
      </Link>
    </div>
  </div>
)

export default ClientDashboard
