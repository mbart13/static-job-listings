import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.attribution}>
    Challenge by{' '}
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noreferrer noopener"
    >
      Frontend Mentor
    </a>
    . Coded by{' '}
    <a
      href="https://github.com/mbart13"
      target="_blank"
      rel="noreferrer noopener"
    >
      Michal Bartosik
    </a>
    .
  </footer>
)

export default Footer
