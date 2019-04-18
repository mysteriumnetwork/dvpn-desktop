import * as React from 'react'
import { TextField, Radio, FormControlLabel } from '@material-ui/core'

import trans from '../../../../../trans'

const styles = require('./AirdropWallet.css')

const AirdropWallet = () => (
  <div>
    <div className={styles.flexedRow}>
      <p>{trans('app.provider.settings.wallet')}</p>
      <div>
        {/* display saved Wallet */}
        <div className={styles.savedWallet}>
          <p>0x701D8FFF10ce5BbFC05FA6cd0dBF18189bC492eb</p>
          <a href="/">{trans('app.provider.settings.change')}</a>
        </div>
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
)

export default AirdropWallet
