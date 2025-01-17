import { getArticleByName } from '@/app/(server)/api';

const ArticlePage = async ({ params }: Params) => {
  const { articleId } = params;

  const article = await getArticleByName(articleId);

  const { name, text, header, preview } = article;

  return (
    <article>
      <h2>{header}</h2>
      {text.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </article>
  );
};

export default ArticlePage;
