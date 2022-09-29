import React from 'react';
import { Link } from 'react-router-dom';
import { Pages } from 'core/enums';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>We are sorry, we could not find the page you requested.</p>
      <p className={styles.linkContainer}>
        <Link to={Pages.main} className={styles.link}>
          Back to home
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
