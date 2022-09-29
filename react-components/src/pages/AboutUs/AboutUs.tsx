import React from 'react';
import { Link } from 'react-router-dom';
import { Pages } from 'core/enums';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.content}>
      <h1 className={styles.title}>About us</h1>
      <p className={styles.text}>This is an about us page</p>
      <p className={styles.linkContainer}>
        <Link to={Pages.main} className={styles.link}>
          Bring me home!
        </Link>
      </p>
    </section>
  );
};

export default AboutUs;
