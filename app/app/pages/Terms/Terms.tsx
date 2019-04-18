import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormControlLabel, Checkbox } from '@material-ui/core'
import { NAV_PROVIDER_SETTINGS } from '../../../provider/provider.links'
import TermsItem from './components/TermsItem/TermsItem'
import trans from '../../../trans'

const styles = require('./Terms.css')

const Terms = () => (
  <div className={styles.appTermsCover}>
    <div className={styles.appTermsListCover}>
      <h2>{trans('app.onboarding.terms.title')}</h2>
      {/* Render Terms Items */}
      <TermsItem />
      <TermsItem />
      <TermsItem />
    </div>
    <div className={styles.bottomBar}>
      <div className={styles.barContent}>
        <div>
          <span className={styles.catMysterium} />
          <p className={styles.termsAgreement}>
            <FormControlLabel
              control={
                <Checkbox
                  value="agreeTerms"
                  checkedIcon={<span className="customIcon icon-checkbox-checked" />}
                />
              }
              label={trans('app.onboarding.terms.agree.label')}
            />
          </p>
          <Link to={NAV_PROVIDER_SETTINGS}>
            <Button>{trans('app.onboarding.continue.btn')}</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Terms
