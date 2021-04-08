import React from 'react'

import styles from './JobDetails.module.scss'
import Feature from 'components/Feature/Feature'

const JobDetails = ({
  company,
  logo,
  new: isNew,
  featured: isFeatured,
  position,
  postedAt,
  contract,
  location,
}) => {
  return (
    <section className={styles.details}>
      <h2 className="sr-only">Job Details</h2>
      <div className={styles.companyLogo}>
        <img src={logo} alt={company} />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.companyFeaturesWrapper}>
          <p className={styles.companyName}>{company}</p>
          <div className={styles.features}>
            {isNew && (
              <Feature backgroundColor="hsl(180, 29%, 50%)">new!</Feature>
            )}
            {isFeatured && (
              <Feature backgroundColor="#2B3939">featured</Feature>
            )}
          </div>
        </div>
        <h3 className={styles.position}>{position}</h3>
        <section>
          <h3 className="sr-only">Job information</h3>
          <ul className={styles.information}>
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default JobDetails
