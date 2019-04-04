import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_PROVIDER_DASHBOARD } from '../../provider.links'

const ProviderSettings = () => (
  <div>
    <h1>Share your connection</h1>
    <h2>Your connection information</h2>
    <Link to={NAV_PROVIDER_DASHBOARD}>Start VPN Server</Link>
  </div>
)

export default ProviderSettings
