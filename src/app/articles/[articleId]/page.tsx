'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { useParams } from 'next/navigation';
import Loader from '@/components/Loader';
import { CircleChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Article = () => {
  const { articleId } = useParams();
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [actual, setActual] = useState<Article | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const articlesFormServer = await data.json();

        setArticles(articlesFormServer);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticle();
  }, []);

  useEffect(() => {
    if (articles && articleId) {
      const foundArticle = articles.find((item) => item.id === +articleId);

      setActual(foundArticle || null);
    }
  }, [articles, articleId]);

  return (
    <article className={styles.article}>
      <div className="container">
        {isLoading && <Loader />}

        {!articleId && <p>Статья не найдена</p>}

        {!isLoading && (
          <article>
            <h2>{actual?.title}</h2>
            <p>{actual?.body}</p>

            <Link
              href="/articles"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <CircleChevronLeft />
              Back to articles
            </Link>
          </article>
        )}
      </div>
    </article>
  );
};

export default Article;
