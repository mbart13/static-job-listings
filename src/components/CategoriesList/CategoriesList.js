import React from 'react'
import { connect } from 'react-redux'

import styles from './CategoriesList.module.scss'

const CategoriesList = ({ filters, addFilter }) => {
  return (
    <section>
      <h3 className="sr-only">Filter Categories</h3>
      <div className={styles.categories}>
        {filters.map((filter, index) => (
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

export default connect(null, mapDispatchToProps)(CategoriesList)
