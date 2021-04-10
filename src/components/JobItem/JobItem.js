import React from 'react'

import CategoriesList from 'components/CategoriesList/CategoriesList'
import styles from './JobItem.module.scss'
import JobDetails from 'components/JobDetails/JobDetails'

const JobItem = ({ job }) => {
  return (
    <article
      className={
        job.featured
          ? `${styles.wrapper} ${styles.isFeatured}`
          : `${styles.wrapper}`
      }
    >
      <h2 className="sr-only">{job.position}</h2>
      <JobDetails {...job} />
      <hr className={styles.divider} />
      <CategoriesList filters={job.filterCategories} />
    </article>
  )
}

export default JobItem
