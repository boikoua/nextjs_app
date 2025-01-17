import articles from './db.json';
import { delayed } from './delayed';

export function getAllArticles() {
  return delayed(articles, { timeout: 1500, shouldFail: false });
}

export function getArticleByName(articleId: string) {
  const article = articles.find((art) => art.name === articleId);

  if (!article) {
    throw new Error('This article not found');
  }

  return delayed(article);
}
