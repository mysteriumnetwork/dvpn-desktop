import * as React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'

import trans from '../../../../../../../trans'

const styles = require('./ResidentialIP.css')

const ResidentialIP = () => (
  <div className={styles.connectionFlexedRow}>
    <div className="app-icons residentialIPIcon" />
    <div className={styles.connectionDetails}>
      <p>
        <span className={styles.textBold}>
          {trans('app.provider.settings.connection.info.residential.ip')}
        </span>
      </p>
      <p className={styles.helperText}>{trans('app.provider.settings.connection.info.helper.text')}</p>
      <span className={styles.checkbox}>
        <FormControlLabel
          control={
            <Checkbox value="confirm" checkedIcon={<span className="customIcon icon-checkbox-checked" />} />
          }
          label={trans('app.provider.settings.connection.info.confirm')}
        />
      </span>
    </div>
  </div>
)

export default ResidentialIP
