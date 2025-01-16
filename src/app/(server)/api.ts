import articles from './db.json';
import { delayed } from './delayed';

export function getAllArticles() {
  return delayed(articles, { timeout: 1500, shouldFail: false });
}
