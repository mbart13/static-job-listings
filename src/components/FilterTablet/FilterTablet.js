import React from 'react'
import { connect } from 'react-redux'

import styles from './FilterTablet.module.scss'
import removeIcon from 'assets/images/icon-remove.svg'

const FilterTablet = ({ children, removeFilter }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.filterTablet}>{children}</span>
      <button
        className={styles.removeBtn}
        aria-label="remove filter"
        onClick={() => removeFilter(children)}
      >
        <img src={removeIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFilter: (filter) =>
      dispatch({ type: 'REMOVE_FILTER', payload: filter }),
  }
}

export default connect(null, mapDispatchToProps)(FilterTablet)
