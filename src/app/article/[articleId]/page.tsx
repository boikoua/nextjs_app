const ArticlePage = ({ params }: Params) => {
  const { articleId } = params;

  return <div>My article page ID: {articleId}</div>;
};

export default ArticlePage;
