import * as React from 'react'
import injectSheet from 'react-jss'
import trans from '../../../../../../../../trans'

const classNames = require('classnames')

interface IStyles {
  root: string
  menuItem: string
  active: string
}

const styles = theme => ({
  root: {
    '& > button': {
      width: '100%',
      outline: 'none',
      border: 'none',
      background: 'transparent',
    },
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 14px',
    position: 'relative',
    borderRadius: 4,
    marginBottom: 2,
    color: theme.colors.textMain,
    '& .flag-icon': {
      marginRight: 12,
    },
    '& .itemsCount': {
      position: 'absolute',
      top: 10,
      right: 10,
      fontSize: 14,
      color: theme.colors.textLightGrey,
    },
    '& > p': {
      fontSize: 14,
    },
  },
  active: {
    color: theme.colors.whiteColor,
    background: theme.colors.actionPurple,
    '& .itemsCount': {
      opacity: '0.5',
      color: theme.colors.whiteColor,
    },
  },
})

export interface IMenuItemProps {
  onChange: any
  classes: IStyles
  style?: React.CSSProperties
}

const CountryItem: React.SFC<IMenuItemProps> = (props: IMenuItemProps) => (
  <div className={props.classes.root}>
    <button type="submit">
      <div
        className={classNames(props.classes.menuItem, {
          // add class active when item selected
          // [props.classes.active]
        })}
      >
        <div className="flag-icon" />
        <p>{trans('app.client.side.bar.ireland')}</p>
        <div className="itemsCount">23</div>
      </div>
    </button>
  </div>
)

export default injectSheet(styles)(CountryItem)
