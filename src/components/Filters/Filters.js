import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import FilterTablet from 'components/FilterTablet/FilterTablet'
import styles from './Filters.module.scss'

const Filters = () => {
  const { filters } = useSelector((state) => state)
  const dispatch = useDispatch()

  if (!filters.length) {
    return null
  }
  return (
    <section className={styles.wrapper}>
      <h2 className="sr-only">Filters</h2>
      <div className={styles.buttonsWrapper}>
        {filters.map((filter) => (
          <FilterTablet key={filter}>{filter}</FilterTablet>
        ))}
      </div>
      <button
        className={styles.buttonClear}
        onClick={() => dispatch({ type: 'CLEAR_FILTERS' })}
      >
        Clear
      </button>
    </section>
  )
}

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func,
}

export default Filters
