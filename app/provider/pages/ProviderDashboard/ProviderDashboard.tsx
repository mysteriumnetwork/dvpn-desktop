import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_PROVIDER_SETTINGS } from '../../provider.links'

const ProviderDashboard = () => (
  <div>
    <Link to={NAV_PROVIDER_SETTINGS}>Disconnect</Link>
    <p>9 users connected</p>
  </div>
)

export default ProviderDashboard
