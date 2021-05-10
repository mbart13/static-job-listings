import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import JobItem from 'components/JobItem/JobItem'
import styles from './JobList.module.scss'
import Spinner from 'components/Spinner/Spinner'

const JobList = () => {
  const { jobs, filters, isError, isLoading } = useSelector((state) => state)

  const filteredJobs = jobs.filter((job) => {
    return filters.every((item) => job.filterCategories.includes(item))
  })

  if (isLoading) {
    return <Spinner aria-label="Loading" aria-hidden={isLoading} />
  }

  if (isError) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        Something went wrong, please try to refresh the page
      </h2>
    )
  }
  return (
    <section className={styles.jobList}>
      {filteredJobs.map((job) => {
        return <JobItem key={job.id} job={job} />
      })}
    </section>
  )
}

JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default JobList
