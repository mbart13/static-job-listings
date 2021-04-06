import React from 'react'

import CategoriesList from 'components/CategoriesList/CategoriesList'
import styles from './JobItem.module.scss'
import JobDetails from 'components/JobDetails/JobDetails'

const JobItem = ({ job, filters }) => {
  return (
    <article
      className={
        job.featured
          ? `${styles.wrapper} ${styles.isFeatured}`
          : `${styles.wrapper}`
      }
    >
      <JobDetails job={job} />
      <hr className={styles.divider} />
      <CategoriesList filters={filters} />
    </article>
  )
}

export default JobItem
