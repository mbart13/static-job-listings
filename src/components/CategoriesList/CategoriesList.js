import React from 'react'

import styles from './CategoriesList.module.scss'

const CategoriesList = ({ filters }) => {
  return (
    <section>
      <h3 className="sr-only">Filter Categories</h3>
      <div className={styles.categories}>
        {filters.map((filter, index) => (
          <button key={index} className={styles.tablet}>
            {filter}
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategoriesList
