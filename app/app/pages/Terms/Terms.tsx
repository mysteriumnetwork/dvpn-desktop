import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormControlLabel, Checkbox } from '@material-ui/core'
import { NAV_PROVIDER_SETTINGS } from '../../../provider/provider.links'
import trans from '../../../trans'

const styles = require('./Terms.css')

const Terms = () => (
  <div className={styles.appTermsCover}>
    <div className={styles.appTermsListCover}>
      <h2>{trans('app.onboarding.terms.title')}</h2>
      <div className={styles.termsItem}>
        <h3>{trans('app.onboarding.terms.title.1')}</h3>
        <p className={styles.termsItemText}>
          The following Terms and Conditions (“T&amp;C”) govern the use of the Mysterium open...
          <a href="/">{trans('app.onboarding.more.btn')}</a>
        </p>
        <p className={styles.date}>Last updated 2018-12-11</p>
      </div>
      <div className={styles.termsItem}>
        <h3>{trans('app.onboarding.terms.title.1')}</h3>
        <p className={styles.termsItemText}>
          The following Terms and Conditions (“T&amp;C”) govern the use of the Mysterium open...
          <a href="/">{trans('app.onboarding.more.btn')}</a>
        </p>
        <p className={styles.date}>Last updated 2018-12-11</p>
      </div>
      <div className={styles.termsItem}>
        <h3>{trans('app.onboarding.terms.title.1')}</h3>
        <p className={styles.termsItemText}>
          The following Terms and Conditions (“T&amp;C”) govern the use of the Mysterium open.. .
          <a href="/">{trans('app.onboarding.more.btn')}</a>
        </p>
        <p className={styles.date}>Last updated 2018-12-11</p>
      </div>
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
