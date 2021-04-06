import React from 'react'

import styles from './JobDetails.module.scss'
import Feature from 'components/Feature/Feature'

const JobDetails = ({ job }) => {
  return (
    <section className={styles.details}>
      <h2 className="sr-only">Job Details</h2>
      <div className={styles.companyLogo}>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.companyFeaturesWrapper}>
          <p className={styles.companyName}>{job.company}</p>
          <div className={styles.features}>
            {job.new && (
              <Feature backgroundColor="hsl(180, 29%, 50%)">new!</Feature>
            )}
            {job.featured && (
              <Feature backgroundColor="#2B3939">featured</Feature>
            )}
          </div>
        </div>
        <h3 className={styles.position}>{job.position}</h3>
        <section>
          <h3 className="sr-only">Job information</h3>
          <ul className={styles.information}>
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default JobDetails
