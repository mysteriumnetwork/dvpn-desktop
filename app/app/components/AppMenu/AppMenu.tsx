import * as React from 'react'
import { IconButton, MenuList, MenuItem } from '@material-ui/core'
import trans from '../../../trans'

const styles = require('./AppMenu.css')

const AppMenu = () => (
  <div className={styles.menuContainer}>
    <IconButton>
      <div className="app-icons appMenuIcon" />
    </IconButton>
    <MenuList>
      <MenuItem>{trans('app.menu.connection.history')}</MenuItem>
      <MenuItem>{trans('app.menu.terms.conditions')}</MenuItem>
      <MenuItem>{trans('app.menu.privacy.policy')}</MenuItem>
      <MenuItem>{trans('app.menu.send.feedback')}</MenuItem>
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
      <MenuItem>{trans('app.menu.about')}</MenuItem>
    </MenuList>
  </div>
)

export default AppMenu
