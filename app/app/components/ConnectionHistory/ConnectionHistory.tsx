import * as React from 'react'
import { Dialog } from '@material-ui/core'
import DialogHeader from './components/DialogHeader/DialogHeader'
import ConnectionsList from './components/ConnectionsList/ConnectionsList'

const styles = require('./ConnectionHistory.css')

class ConnectionHistory extends React.Component {
  public state = {
    open: false,
  }

  private handleMenuClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state

    return (
      <Dialog
        open={open}
        fullScreen
        onClose={this.handleMenuClose}
        aria-labelledby="draggable-dialog-title"
        className={styles.root}
      >
        <DialogHeader />
        <ConnectionsList />
      </Dialog>
    )
  }
}

export default ConnectionHistory
