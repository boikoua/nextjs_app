import Link from 'next/link';
import { getAllArticles } from './(server)/api';
import styles from './page.module.css';
import { ROUTING } from './routing';

export default async function Home() {
  const allArticles = await getAllArticles();

  const showArticles = allArticles.map((article) => (
    <li key={article.name}>
      <Link className={styles.link} href={ROUTING.article(article.name)}>
        {article.header}
      </Link>
    </li>
  ));

  return (
    <>
      <h1>Усі статті мого блогу</h1>
      <ul className={styles.items}>{showArticles}</ul>
    </>
  );
}
