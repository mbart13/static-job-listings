import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FilterTablet from 'components/FilterTablet/FilterTablet'
import styles from './Filters.module.scss'

const Filters = ({ filters, dispatch }) => {
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

const mapStateToProps = (state) => {
  return { filters: state.filters }
}

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(Filters)
