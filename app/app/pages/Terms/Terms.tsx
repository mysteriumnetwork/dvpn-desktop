import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_PROVIDER_SETTINGS } from '../../../provider/provider.links'

const Terms = () => (
  <div>
    <p>Terms and conditions</p>
    <Link to={NAV_PROVIDER_SETTINGS}>Continue</Link>
  </div>
)

export default Terms
