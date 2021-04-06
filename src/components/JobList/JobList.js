import React from 'react'

import JobItem from 'components/JobItem/JobItem'
import styles from './JobList.module.scss'

const JobList = ({ jobs }) => {
  return (
    <section className={styles.jobList}>
      {jobs.map((job) => {
        return (
          <JobItem
            key={job.id}
            job={job}
            filters={[job.role, job.level, ...job.languages, ...job.tools]}
          />
        )
      })}
    </section>
  )
}

export default JobList
