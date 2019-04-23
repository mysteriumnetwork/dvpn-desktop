import * as React from 'react'
import injectSheet from 'react-jss'
import { IconButton, DialogTitle } from '@material-ui/core'
import trans from '../../../../../trans'

interface IStyles {
  titleRoot: string
  dialogHeader: string
  dialogHeaderBack: string
  tab: string
}

const styles = theme => ({
  titleRoot: {
    padding: 0,
    minWidth: 360,
  },
  dialogHeaderBack: {
    height: 240,
    width: '100%',
    position: 'absolute',
    background: 'url("app/components/assets/images/app-pattern.svg") ',
    backgroundSize: 'cover',
    '&:after': {
      display: 'block',
      content: '" "',
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff)',
    },
  },
  dialogHeader: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > h3': {
      maxWidth: 165,
      margin: '-20px 0  12px',
      textAlign: 'center',
      color: '#272265',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontFamily: '"MagdaClean", sans-serif',
      fontSize: theme.typography.fontSizes.mainTitle,
    },
    '& > button': {
      position: 'absolute',
      right: 3,
      top: 3,
      padding: 6,
    },
    '& > div': {
      height: 184,
      width: 184,
      top: -24,
      position: 'relative',
      background: 'url("app/components/assets/images/AppIcon.svg") no-repeat',
    },
  },
})

export interface IDialogHeaderProps {
  onChange: any
  classes: IStyles
  style?: React.CSSProperties
}

const DialogHeader: React.SFC<IDialogHeaderProps> = (props: IDialogHeaderProps) => (
  <DialogTitle
    classes={{
      root: props.classes.titleRoot,
    }}
  >
    <div className={props.classes.dialogHeaderBack} />
    <div className={props.classes.dialogHeader}>
      <div />
      <h3> {trans('app.about.title')}</h3>
      <IconButton>
        <div className="app-icons close-icon" />
      </IconButton>
    </div>
  </DialogTitle>
)

export default injectSheet(styles)(DialogHeader)
