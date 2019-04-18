import * as React from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import trans from '../../../trans'

const styles = require('./AppMenu.css')

class AppMenu extends React.Component {
  public state = {
    anchorEl: null,
  }

  private handleMenuOpen = (event: any) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  private handleMenuClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const buttonProps: any = {
      'aria-owns': open ? 'menu-appbar' : null,
      open: Boolean(anchorEl),
      onClick: this.handleMenuOpen,
    }

    return (
      <div className={styles.menuContainer}>
        <IconButton {...buttonProps}>
          <div className="app-icons appMenuIcon" />
        </IconButton>
        <Menu id="menu-appbar" open={open} anchorEl={anchorEl} onClose={this.handleMenuClose}>
          <MenuItem className={styles.menuItem}>{trans('app.menu.connection.history')}</MenuItem>
          <MenuItem className={styles.menuItem}>{trans('app.menu.terms.conditions')}</MenuItem>
          <MenuItem className={styles.menuItem}>{trans('app.menu.privacy.policy')}</MenuItem>
          <MenuItem className={styles.menuItem}>{trans('app.menu.send.feedback')}</MenuItem>
          <MenuItem button={false} className={styles.followMenuItem}>
            <div className={styles.followList}>
              <p>{trans('app.menu.follow.us')}</p>
              <ul>
                <li>
                  <a href="/">
                    <div className="app-icons telegram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <div className="app-icons medium" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <div className="app-icons tweeter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <div className="app-icons reddit" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <div className="app-icons facebook" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <div className="app-icons github" />
                  </a>
                </li>
              </ul>
            </div>
          </MenuItem>
          <MenuItem className={styles.menuItem}>{trans('app.menu.about')}</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default AppMenu
