//Inner
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { useActions } from '../../hooks/useActions';

export const ArticlesList: React.FC = () => {
  const { fetchArticles } = useActions();
  const state = useTypedSelector((state) => state);

  const handleFetch = () => {
    fetchArticles();
  };

  console.log(state);
  return (
    <div>
      <button onClick={handleFetch}>CLick me</button>
    </div>
  );
};
