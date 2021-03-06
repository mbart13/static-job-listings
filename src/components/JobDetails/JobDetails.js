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
    <div className={styles.details}>
      <div className={styles.companyLogo}>
        <img src={logo} alt="" aria-hidden="true" />
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
        <h2 className={styles.position}>{position}</h2>
        <div>
          <ul className={styles.information}>
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
