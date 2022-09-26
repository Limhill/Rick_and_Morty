import React from 'react';
import styles from 'styles/components/_emptyPage.module.scss';

const AboutUs = () => {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <h1 className={styles.title}>About us</h1>
        <p className={styles.text}>This is an about us page</p>
      </section>
    </main>
  );
};

export default AboutUs;
