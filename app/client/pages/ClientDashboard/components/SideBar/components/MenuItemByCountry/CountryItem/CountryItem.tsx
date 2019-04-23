import * as React from 'react'
import injectSheet from 'react-jss'
import trans from '../../../../../../../../trans'

interface IStyles {
  root: string
}

const styles = theme => ({
  root: {
    marginBottom: 2,
    '& .flag-icon': {
      marginRight: 12,
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
        '& .itemsCount': {
          opacity: '0.5',
          color: theme.colors.whiteColor,
        },
      },
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
    <a href="/">
      <div className="flag-icon" />
      <p>{trans('app.client.side.bar.ireland')}</p>
      <div className="itemsCount">23</div>
    </a>
  </div>
)

export default injectSheet(styles)(CountryItem)
