import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import JobItem from 'components/JobItem/JobItem'
import styles from './JobList.module.scss'
import Spinner from 'components/Spinner/Spinner'

const JobList = ({ jobs, isError, isLoading }) => {
  if (isLoading) {
    return <Spinner aria-label="Loading" aria-hidden={false} />
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
      {jobs.map((job) => {
        return <JobItem key={job.id} job={job} />
      })}
    </section>
  )
}

const mapStateToProps = (state) => {
  const { jobs, filters, isError, isLoading } = state

  const filteredJobs = jobs.filter((job) => {
    return filters.every((item) => job.filterCategories.includes(item))
  })

  return { jobs: filteredJobs, isError, isLoading }
}

JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(JobList)
