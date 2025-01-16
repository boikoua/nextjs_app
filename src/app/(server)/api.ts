import articles from './db.json';
import { delayed } from './delayed';

export function getAllArticles() {
  return delayed(new Error('Not_Found'), { timeout: 1500, shouldFail: true });
}
