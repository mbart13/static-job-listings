import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './CategoriesList.module.scss'

const CategoriesList = ({ filterCategories, addFilter }) => {
  return (
    <section>
      <h3 className="sr-only">Filter Categories</h3>
      <div className={styles.categories}>
        {filterCategories.map((filter, index) => (
          <button
            key={index}
            className={styles.tablet}
            onClick={() => addFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFilter: (filter) => dispatch({ type: 'ADD_FILTER', payload: filter }),
  }
}

CategoriesList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  addFilter: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(CategoriesList)
