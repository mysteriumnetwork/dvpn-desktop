import * as React from 'react'
import { Dialog } from '@material-ui/core'
import injectSheet from 'react-jss'
import DialogHeader from './components/DialogHeader/DialogHeader'
import DialogContent from './components/DialogContent/DialogContent'

interface IStyles {
  containerStyled: string
  paperStyled: string
  rootBackdrop: string
}

const styles = theme => ({
  containerStyled: {
    padding: 12,
  },
  paperStyled: {
    overflowY: 'unset',
    borderRadius: 4,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
  },
  rootBackdrop: {
    background: 'rgba(213, 213, 213, 0.7)',
  },
})

export interface IAppAboutProps {
  classes: IStyles
  style?: React.CSSProperties
}

class AppAbout extends React.Component<IAppAboutProps> {
  public state = {
    open: true,
  }

  private handleDialogClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    const { classes } = this.props

    return (
      <Dialog
        open={open}
        onClose={this.handleDialogClose}
        classes={{
          container: classes.containerStyled,
          paper: classes.paperStyled,
        }}
        BackdropProps={{
          classes: {
            root: classes.rootBackdrop,
          },
        }}
      >
        <DialogHeader />
        <DialogContent />
      </Dialog>
    )
  }
}

export default injectSheet(styles)(AppAbout)
