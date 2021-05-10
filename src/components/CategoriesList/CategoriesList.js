import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './CategoriesList.module.scss'

const CategoriesList = ({ filterCategories }) => {
  const dispatch = useDispatch()

  const addFilter = (filter) =>
    dispatch({ type: 'ADD_FILTER', payload: filter })
  return (
    <div>
      <h2 className="sr-only">Filter Categories</h2>
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
    </div>
  )
}

CategoriesList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  addFilter: PropTypes.func,
}

export default CategoriesList
