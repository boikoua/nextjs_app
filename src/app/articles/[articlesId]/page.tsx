'use client';

import styles from './page.module.scss';

const Article = () => {
  return (
    <article className={styles.article}>
      <div className="container">
        <h1>Отдельная статья</h1>
      </div>
    </article>
  );
};

export default Article;
