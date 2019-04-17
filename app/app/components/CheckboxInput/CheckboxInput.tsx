import * as React from 'react'
import { FormControlLabel, Checkbox, withStyles } from '@material-ui/core'
import CheckBoxChecked from '@material-ui/icons/CheckBoxRounded'
import createStyles from '@material-ui/core/styles/createStyles'

const classNames = require('classnames')

interface ICheckboxInputProps {
  label: string
  classes?: any
  id?: any
  value?: any
  selected?: number
  onChange?: any
}

interface IState {
  checked: boolean
}

class CheckboxInput extends React.Component<ICheckboxInputProps, IState> {
  state = {
    checked: false,
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <FormControlLabel
          control={
            <Checkbox
              id={this.props.id}
              value={this.props.value}
              checked={this.state.checked}
              onChange={this.props.onChange}
              className={classNames(this.props.classes.root)}
              icon={<span className={this.props.classes.iconBox} />}
              checkedIcon={<CheckBoxChecked />}
            />
          }
          label={this.props.label}
        />
      </div>
    )
  }
}

const styles = theme =>
  createStyles({
    root: {},
    iconBox: {
      display: 'block',
      width: 18,
      height: 18,
      margin: 3,
      borderRadius: 2,
      background: '#fff',
      boxShadow: 'inset 0 0.5px 1.5px 0 #cccccc, inset 0 0 0.5px 0 #333333',
    },
  })

export default withStyles(styles)(CheckboxInput as any)
