import * as React from 'react'

const styles = require('./AppHeader.css')

const AppHeader = () => (
  <div className={styles.appHeader}>
    <div className={styles.tabContainer}>
      <div className={styles.tab}>Connect to VPN</div>
      <div className={styles.tab}>Provide VPN</div>
    </div>
  </div>
)

export default AppHeader
