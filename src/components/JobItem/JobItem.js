import React from 'react'
import PropTypes from 'prop-types'

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
      <CategoriesList filterCategories={job.filterCategories} />
    </article>
  )
}

JobItem.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    filterCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    level: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    logo: PropTypes.string,
    new: PropTypes.bool,
    position: PropTypes.string.isRequired,
    postedAt: PropTypes.string,
    role: PropTypes.string,
    tools: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default JobItem
