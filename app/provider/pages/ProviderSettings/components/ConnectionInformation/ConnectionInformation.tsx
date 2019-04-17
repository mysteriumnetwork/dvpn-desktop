import * as React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'
import trans from '../../../../../trans'

const styles = require('./ConnectionInformation.css')

const ConnectionInformation = () => (
  <div>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <p className={styles.appConnectionTitle}>{trans('app.provider.settings.your.connection.info')}</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={styles.connectionFlexedRow}>
          {/*  TODO replace with dynamic country flag */}
          <div className="flag-icon" />
          <div className={styles.connectionDetails}>
            {/* TODO replace with dynamic info */}
            <p>
              <span className={styles.textBold}>88.17.13.176</span>
              (Lithuania)
            </p>
            <a href="/">{trans('app.provider.settings.connection.info.change')}</a>
          </div>
        </div>
        {/* markup for Residential IP */}
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
                  <Checkbox
                    value="confirm"
                    checkedIcon={<span className="customIcon icon-checkbox-checked" />}
                  />
                }
                label={trans('app.provider.settings.connection.info.confirm')}
              />
            </span>
          </div>
        </div>
        {/* markup for Data Center IP */}
        <div className={styles.connectionFlexedRow}>
          <div className="app-icons dataCenterIPIcon" />
          <div className={styles.connectionDetails}>
            <p>
              <span className={styles.textBold}>
                {trans('app.provider.settings.connection.info.data.center.ip')}
              </span>
            </p>
            <p className={styles.helperText}>
              {trans('app.provider.settings.connection.info.helper.text.data.center')}
            </p>
            <a href="/">{trans('app.provider.settings.connection.info.change')}</a>
          </div>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
)

export default ConnectionInformation
