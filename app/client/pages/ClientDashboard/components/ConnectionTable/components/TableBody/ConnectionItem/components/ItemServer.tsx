import * as React from 'react'
import injectSheet from 'react-jss'

const classNames = require('classnames')

interface IStyles {
  ipItem: string
  highlight: string
}

const styles = theme => ({
  ipItem: {
    display: 'flex',
    alignItems: 'center',
    '& > p': {
      marginLeft: 8,
    },
  },
  highlight: {
    '& > p': {
      color: theme.colors.whiteColor,
    },
  },
})

export interface IItemServerProps {
  selected: boolean
  classes: IStyles
  style?: React.CSSProperties
}

const ItemServer: React.SFC<IItemServerProps> = (props: IItemServerProps) => (
  <td>
    <div
      className={classNames(props.classes.ipItem, {
        // set class highlight when item is selected
        // [props.classes.highlight]&&selected
      })}
    >
      <div className="flag-icon" />
      <p>172.93.13.176</p>
    </div>
  </td>
)

export default injectSheet(styles)(ItemServer)
