import React from 'react'
import { connect } from 'react-redux'

import JobItem from 'components/JobItem/JobItem'
import styles from './JobList.module.scss'

const JobList = ({ jobs }) => {
  return (
    <section className={styles.jobList}>
      {jobs.map((job) => {
        return <JobItem key={job.id} job={job} />
      })}
    </section>
  )
}

const mapStateToProps = (state) => {
  const { jobs, filters } = state

  const filteredJobs = jobs.filter((job) => {
    return filters.every((item) => job.filterCategories.includes(item))
  })

  return { jobs: filteredJobs }
}

export default connect(mapStateToProps)(JobList)
