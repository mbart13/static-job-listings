import React from 'react'

import JobItem from 'components/JobItem/JobItem'
import styles from './JobList.module.scss'

const JobList = ({ jobs }) => {
  return (
    <main>
      <h1 className="sr-only">Job Listings</h1>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </main>
  )
}

export default JobList
