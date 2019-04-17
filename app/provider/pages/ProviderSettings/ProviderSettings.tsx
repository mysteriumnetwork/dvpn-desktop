import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_PROVIDER_DASHBOARD } from '../../provider.links'
import trans from '../../../trans'

const styles = require('./ProviderSettings.css')

const ProviderSettings = () => (
  <div className={styles.appProviderSettingsCover}>
    <h1>{trans('app.provider.settings.share.your.connection')}</h1>
    <div className={styles.contentContainer}>
      <div>
        <div className={styles.flexedRow}>
          <p>{trans('app.provider.settings.my.id')}</p>
          <div>d617f200ef28a3a3ca2fc78a86d190e5c6f8eb0c</div>
        </div>
        <div className={styles.flexedRow}>
          <p>{trans('app.provider.settings.wallet')}</p>
          <div>
            <input type="text" name="airdropWallet" placeholder="0x..." />
            <p className={styles.helperText}>{trans('app.provider.settings.wallet.helper.text')}</p>
          </div>
        </div>
        <div className={styles.flexedRow}>
          <p>{trans('app.provider.settings.traffic')}</p>
          <div>
            <div className={styles.radioForm}>
              <input type="radio" name="mysteriumVarified" />
              <span>{trans('app.provider.settings.verified.partner.traffic')}</span>
              <p className={styles.helperText}>{trans('app.provider.settings.safe.option')}</p>
            </div>
            <div className={styles.radioForm}>
              <input type="radio" name="mysteriumVarified" />
              <span>{trans('app.provider.settings.all.traffic')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <Link to={NAV_PROVIDER_DASHBOARD}>{trans('app.provider.settings.start.vpn')}</Link>
    </div>
  </div>
)

export default ProviderSettings
