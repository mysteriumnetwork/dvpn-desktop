import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_TERMS } from '../../app.links'

const Welcome = () => (
  <div>
    <p>Welcome to Mysterium Network</p>
    <p>Connect to everything, everywhere via the World&quot;s 1st decentralized VPN</p>
    <Link to={NAV_TERMS}>Get Started</Link>
  </div>
)

export default Welcome
