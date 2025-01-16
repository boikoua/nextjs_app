import { getAllArticles } from './(server)/api';
import styles from './page.module.css';

export default async function Home() {
  const allArticles = await getAllArticles();

  const showArticles = allArticles.map((article) => (
    <li key={article.name}>{article.header}</li>
  ));

  return (
    <>
      <h1>Усі статті мого блогу</h1>
      <ul>{showArticles}</ul>
    </>
  );
}
