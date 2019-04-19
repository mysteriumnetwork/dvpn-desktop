import * as React from 'react'

const styles = require('./ConnectionsList.css')

const ConnectionItem = () => (
  <tr>
    <td>
      <div className={styles.ipItem}>
        <div className="flag-icon" />
        <p>172.93.13.176</p>
      </div>
    </td>
    <td>2018-12-28 12:21</td>
    <td>00:02:13:40</td>
    <td>12.32 GB</td>
    <td>2.32 GB</td>
  </tr>
)

export default ConnectionItem
