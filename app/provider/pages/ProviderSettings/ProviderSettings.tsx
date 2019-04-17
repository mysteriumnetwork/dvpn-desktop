import * as React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Radio, FormControlLabel, Button } from '@material-ui/core'
import { NAV_PROVIDER_DASHBOARD } from '../../provider.links'
import trans from '../../../trans'
import ConnectionInformation from './components/ConnectionInformation/ConnectionInformation'

const styles = require('./ProviderSettings.css')

const ProviderSettings = () => (
  <div className={styles.appProviderSettingsCover}>
    <div className={styles.scrollView}>
      <h1>{trans('app.provider.settings.share.your.connection')}</h1>
      <div className={styles.contentContainer}>
        <div>
          <div className={styles.flexedRow}>
            <p>{trans('app.provider.settings.my.id')}</p>
            {/* TODO replace with dynamic info */}
            <div>d617f200ef28a3a3ca2fc78a86d190e5c6f8eb0c</div>
          </div>
          <div className={styles.flexedRow}>
            <p>{trans('app.provider.settings.wallet')}</p>
            <div>
              <TextField
                placeholder="0x..."
                name="airdropWallet"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
              />
              {/* TODO show error if wallet address invalid */}
              <p className={styles.errorText}>{trans('app.provider.settings.wallet.error')}</p>
              <p className={styles.helperText}>{trans('app.provider.settings.wallet.helper.text')}</p>
            </div>
          </div>
          <div className={styles.flexedRow}>
            <p>{trans('app.provider.settings.traffic')}</p>
            {/* TODO Add Radio controls */}
            <div>
              <div className={styles.radioForm}>
                <FormControlLabel
                  value="mysteriumVarified"
                  control={<Radio checkedIcon={<span className="customIcon icon-radio-checked" />} />}
                  label={trans('app.provider.settings.verified.partner.traffic')}
                  labelPlacement="end"
                />
                <p className={styles.helperText}>{trans('app.provider.settings.safe.option')}</p>
              </div>
              <div className={styles.radioForm}>
                <FormControlLabel
                  value="mysteriumVarified"
                  control={<Radio checkedIcon={<span className="customIcon icon-radio-checked" />} />}
                  label={trans('app.provider.settings.all.traffic')}
                  labelPlacement="end"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ExpansionPanel component with connection information */}
        <ConnectionInformation />
      </div>
    </div>

    <div className={styles.bottomBar}>
      <Link to={NAV_PROVIDER_DASHBOARD}>
        <Button>{trans('app.provider.settings.start.vpn')}</Button>
      </Link>
    </div>
  </div>
)

export default ProviderSettings
