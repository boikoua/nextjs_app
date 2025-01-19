import { Article } from '@/types/Article';
import styles from './page.module.scss';
import Link from 'next/link';

const Articles = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');

  const articles: Article[] = await data.json();

  return (
    <div className={styles.articles}>
      <div className="container">
        <h1>Articles</h1>
        <ul>
          {articles.map((item) => (
            <li key={item.id}>
              <Link href={`/articles/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
