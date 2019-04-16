import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_PROVIDER_SETTINGS } from '../../../provider/provider.links'
import injectSheet from 'react-jss'
import trans from '../../../trans'
const styles = require('./Terms.css');

const Terms = () => (
  <div className={styles.appTermsCover}>
    <div className={styles.appTermsListCover}>
      <h2>{trans('app.onboarding.terms.title')}</h2>
      <div className={styles.termsItem}>
        <h3>{trans('app.onboarding.terms.title.1')}</h3>
        <p className={styles.termsItemText}>The following Terms and Conditions (“T&amp;C”) govern the use of the Mysterium open...<a>{trans('app.onboarding.more.btn')}</a></p>
        <p className={styles.date}>Last updated 2018-12-11</p>
      </div>
      <div className={styles.termsItem}>
        <h3>{trans('app.onboarding.terms.title.1')}</h3>
        <p className={styles.termsItemText}>The following Terms and Conditions (“T&amp;C”) govern the use of the Mysterium open...<a>{trans('app.onboarding.more.btn')}</a></p>
        <p className={styles.date}>Last updated 2018-12-11</p>
      </div>
      <div className={styles.termsItem}>
        <h3>{trans('app.onboarding.terms.title.1')}</h3>
        <p className={styles.termsItemText}>The following Terms and Conditions (“T&amp;C”) govern the use of the Mysterium open...<a>{trans('app.onboarding.more.btn')}</a></p>
        <p className={styles.date}>Last updated 2018-12-11</p>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className={styles.barContent}>
        <div>
          <span className={styles.catMysterium}/>
          <p className={styles.termsAgreement}>
            <input type="checkbox" />
            <span>I agree to all Terms of Serivce</span>
          </p>
          <Link to={NAV_PROVIDER_SETTINGS}>{trans('app.onboarding.continue.btn')}</Link>
        </div>
      </div>
    </div>
  </div>
)

export default  injectSheet(styles)(Terms)
