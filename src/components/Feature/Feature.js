import React from 'react'

import styles from './Feature.module.scss'

const Feature = ({ children, backgroundColor }) => (
  <>
    <span
      className={styles.feature}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </span>
  </>
)

export default Feature
