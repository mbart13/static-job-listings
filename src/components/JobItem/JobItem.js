import React from 'react'

import styles from './JobItem.module.scss'

const JobItem = () => {
  const data = {
    id: 1,
    company: 'Photosnap',
    logo: './assets/images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  }

  return (
    <article className={[styles.wrapper, styles.featured].join(' ')}>
      <section className={styles.details}>
        <h2 className="sr-only">Job Details</h2>
        <div className={styles.companyLogo}>
          <img src={data.logo} alt={data.company} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.companyFeaturesWrapper}>
            <p className={styles.companyName}>{data.company}</p>
            <div className={styles.features}>
              <span>new!</span>
              <span>featured</span>
            </div>
          </div>
          <h3 className={styles.position}>{data.position}</h3>
          <section>
            <h3 className="sr-only">Job information</h3>
            <ul className={styles.information}>
              <li>{data.postedAt}</li>
              <li>{data.contract}</li>
              <li>{data.location}</li>
            </ul>
          </section>
        </div>
      </section>
      <hr className={styles.divider} />
      <section>
        <h3 className="sr-only">Filter Categories</h3>
        <div className={styles.categories}>
          <button className={styles.tablet}>{data.role}</button>
          <button className={styles.tablet}>{data.level}</button>
          {data.languages.map((language) => (
            <button className={styles.tablet}>{language}</button>
          ))}
        </div>
      </section>
    </article>
  )
}

export default JobItem
