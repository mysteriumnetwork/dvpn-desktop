import * as React from 'react'
import { DialogContent } from '@material-ui/core'
import trans from '../../../../../trans'
import ConnectionItem from './ConnectionItem'

const styles = require('./ConnectionsList.css')

const ConnectionsList = () => (
  <DialogContent id="draggable-dialog-title">
    <table className={styles.connectionTable}>
      <thead>
        <tr>
          <th>{trans('app.connection.history.client')}</th>
          <th>{trans('app.connection.history.started')}</th>
          <th>{trans('app.node.running.duration')}</th>
          <th>{trans('app.node.running.downloaded')}</th>
          <th>{trans('app.node.running.uploaded')}</th>
        </tr>
      </thead>
      <tbody>
        {/* render connections items */}
        <ConnectionItem />
      </tbody>
    </table>
  </DialogContent>
)

export default ConnectionsList
