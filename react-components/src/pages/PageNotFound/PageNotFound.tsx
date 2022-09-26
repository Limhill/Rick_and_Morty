import React from 'react';
import styles from 'styles/components/_emptyPage.module.scss';

const PageNotFound = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          We&apos;re sorry, we couldn&apos;t find the page you requested.
        </p>
      </div>
    </main>
  );
};

export default PageNotFound;
