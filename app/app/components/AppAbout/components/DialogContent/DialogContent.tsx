import * as React from 'react'
import injectSheet from 'react-jss'
import { DialogContent, Button } from '@material-ui/core'
import trans from '../../../../../trans'

interface IStyles {
  rootStyled: string
  textStyled: string
  action: string
}

const styles = theme => ({
  rootStyled: {
    textAlign: 'center',
  },
  textStyled: {
    fontSize: theme.typography.fontSizes.tableHeadFont,
    color: theme.colors.textSecondary,
    margin: '8px 0',
  },
  action: {
    margin: '12px auto 0',
  },
})

export interface IDialogContentProps {
  onChange: any
  classes: IStyles
  style?: React.CSSProperties
}

const AppDialogContent: React.SFC<IDialogContentProps> = (props: IDialogContentProps) => (
  <DialogContent classes={{ root: props.classes.rootStyled }}>
    <p className={props.classes.textStyled}>{trans('app.about.app.version')} 1.2</p>
    <p className={props.classes.textStyled}>{trans('app.about.checked.for.updates')}</p>
    <div className={props.classes.action}>
      <Button>{trans('app.about.check.for.updates')}</Button>
    </div>
  </DialogContent>
)

export default injectSheet(styles)(AppDialogContent)
