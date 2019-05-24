import * as React from 'react'
import injectSheet from 'react-jss'
import trans from '../../../../../../../trans'

const classNames = require('classnames')

interface IStyles {
  root: string
  itemsCount: string
  faveIcon: string
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
    '& .faveIcon': {
      width: 24,
      height: 24,
      minWidth: 24,
      marginRight: 10,
      background: 'url("app/components/assets/images/app-icons.svg") no-repeat',
      backgroundSize: '184px 232px',
      backgroundPosition: '4px -60px',
    },
    '& .itemsCount': {
      position: 'absolute',
      top: 10,
      right: 14,
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
    '& .faveIcon': {
      backgroundPosition: '-20px -62px',
    },
    '& .itemsCount': {
      opacity: '0.5',
      color: theme.colors.whiteColor,
    },
  },
})

export interface IMenuItemFavoriteProps {
  onChange: any
  classes: IStyles
  style?: React.CSSProperties
}

const MenuItemFavorite: React.SFC<IMenuItemFavoriteProps> = (props: IMenuItemFavoriteProps) => (
  <div className={props.classes.root}>
    <button type="submit">
      <div
        className={classNames(props.classes.menuItem, {
          // add class active when item selected
          // [props.classes.active]
        })}
      >
        <div className="faveIcon" />
        <p>{trans('app.client.side.bar.favorites')}</p>
        <div className="itemsCount">3</div>
      </div>
    </button>
  </div>
)

export default injectSheet(styles)(MenuItemFavorite)
