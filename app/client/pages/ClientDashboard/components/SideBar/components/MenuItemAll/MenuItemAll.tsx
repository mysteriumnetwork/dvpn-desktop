import * as React from 'react'
import injectSheet from 'react-jss'
import trans from '../../../../../../../trans'

interface IStyles {
  root: string
}

const styles = theme => ({
  root: {
    marginBottom: 2,
    '& .allIcon': {
      width: 24,
      height: 24,
      minWidth: 24,
      marginRight: 10,
      background: 'url("app/components/assets/images/app-icons.svg") no-repeat',
      backgroundSize: '184px 232px',
      backgroundPosition: '4px -36px',
    },
    '& .itemsCount': {
      position: 'absolute',
      top: 6,
      right: 14,
      color: theme.colors.textLightGrey,
    },
    '& > a': {
      display: 'flex',
      alignItems: 'center',
      padding: '6px 14px',
      position: 'relative',
      borderRadius: 4,
      color: theme.colors.textMain,
      '&:hover': {
        color: theme.colors.whiteColor,
        background: theme.colors.actionPurple,
        '& .allIcon': {
          backgroundPosition: '-20px -36px',
        },
        '& .itemsCount': {
          opacity: '0.5',
          color: theme.colors.whiteColor,
        },
      },
    },
  },
})

export interface IMenuItemAllProps {
  onChange: any
  classes: IStyles
  style?: React.CSSProperties
}

const MenuItemAll: React.SFC<IMenuItemAllProps> = (props: IMenuItemAllProps) => (
  <div className={props.classes.root}>
    <a href="/">
      <div className="allIcon" />
      <p>{trans('app.client.side.bar.all')}</p>
      <div className="itemsCount">23</div>
    </a>
  </div>
)

export default injectSheet(styles)(MenuItemAll)
