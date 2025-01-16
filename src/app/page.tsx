import Link from 'next/link';
import { getAllArticles } from './(server)/api';
import styles from './page.module.css';
import { ROUTING } from './routing';
const ARTICLES_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const allArticles = await getAllArticles();

  const page = Number.parseInt(searchParams['page'] ?? 1);
  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  const showArticles = articles.map((article) => (
    <li key={article.name}>
      <Link className={styles.link} href={ROUTING.article(article.name)}>
        {article.header}
      </Link>
    </li>
  ));

  const prevPageURL = {
    search: new URLSearchParams({
      page: (page - 1 ? page - 1 : 1).toString(),
    }).toString(),
  };

  const nextPageURL = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };

  return (
    <>
      <h1>Усі статті мого блогу </h1>
      <ul className={styles.items}>{showArticles}</ul>

      <div className={styles.pagination}>
        <Link href={prevPageURL}>Prev</Link>

        <Link href={nextPageURL}>Next</Link>
      </div>
    </>
  );
}
