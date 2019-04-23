import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_CLIENT_DASHBOARD } from '../../client.links'
import trans from '../../../trans'
import Button from '../../../ui-kit/components/Button/Button'

// const styles = require('./ProviderDashboard.scss')

const ClientConnectionFailed = () => (
  <div>
    <div>
      <h4>
        <p>9{trans('app.node.running.users.connected')}</p>
        <p>
          9{trans('app.node.running.successful.connections')}
          <span>/</span>
          11{trans('app.node.running.attempted')}
        </p>
      </h4>
      <Link to={NAV_CLIENT_DASHBOARD}>
        <Button variant="contained" color="secondary">
          Disconnect
        </Button>
      </Link>
    </div>
  </div>
)

export default ClientConnectionFailed
