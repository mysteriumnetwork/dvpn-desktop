import * as React from 'react'
import { IconButton, DialogTitle } from '@material-ui/core'
import trans from '../../../../../trans'

const styles = require('./DialogHeader.css')

const DialogHeader = () => (
  <DialogTitle id="draggable-dialog-title">
    <div className={styles.dialogHeader}>
      <h3> {trans('document.title')}</h3>
      <div className={styles.tabContainer}>
        <div className={styles.tab}>{trans('app.header.connect.vpn')}</div>
        <div className={styles.tab}>{trans('app.header.provide.vpn')}</div>
      </div>
      <IconButton>
        <div className="app-icons close-icon" />
      </IconButton>
    </div>
  </DialogTitle>
)

export default DialogHeader
