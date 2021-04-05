import React from 'react'

import JobItem from 'components/JobItem/JobItem'
import styles from './JobList.module.scss'

const JobList = () => {
  return (
    <main>
      <h1 className="sr-only">Job Listings</h1>
      <JobItem />
    </main>
  )
}

export default JobList
