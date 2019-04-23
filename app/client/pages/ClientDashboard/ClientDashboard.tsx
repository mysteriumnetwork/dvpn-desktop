import * as React from 'react'

import SideBar from './components/SideBar/SideBar'
import ConnectionTable from './components/ConnectionTable/ConnectionTable'

const styles = require('./ClientDashboard.scss')

const ClientDashboard = () => (
  <div className={styles.dashboardCover}>
    <SideBar />
    <ConnectionTable />
  </div>
)

export default ClientDashboard
