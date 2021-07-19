//Outter
import { useEffect } from 'react';

//Inner
import { useTypedSelector } from '../../../../hooks/useTypedSelectors';
import { useActions } from '../../../../hooks/useActions';
import { Article } from '../article';

//Styles
import { Wrapper } from './ArticleList.css';

export const ArticlesList: React.FC = () => {
  const { fetchArticles } = useActions();
  const articles = useTypedSelector((state) => state.articles.posts);

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Wrapper>
      {articles.map((article) => (
        <Article key={article.id} item={article} />
      ))}
    </Wrapper>
  );
};
