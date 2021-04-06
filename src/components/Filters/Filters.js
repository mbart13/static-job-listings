import React from 'react'

import FilterTablet from 'components/FilterTablet/FilterTablet'
import styles from './Filters.module.scss'

const Filters = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className="sr-only">Filters</h2>
      <div className={styles.buttonsWrapper}>
        <FilterTablet>JavaScript</FilterTablet>
        <FilterTablet>HTML</FilterTablet>
        <FilterTablet>CSS</FilterTablet>
      </div>
      <button className={styles.buttonClear}>Clear</button>
    </section>
  )
}

export default Filters
