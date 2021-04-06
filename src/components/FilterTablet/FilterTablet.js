import React from 'react'

import styles from './FilterTablet.module.scss'
import removeIcon from 'assets/images/icon-remove.svg'

const FilterTablet = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.filterTablet}>{children}</span>
      <button className={styles.removeBtn} aria-label="remove filter">
        <img src={removeIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  )
}

export default FilterTablet
