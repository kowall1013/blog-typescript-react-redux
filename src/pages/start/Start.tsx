//Outter
import { Route, useParams, Switch, BrowserRouter as Router } from 'react-router-dom';

//Inner
import { ArticlesList } from './components';
import { ArticleDetails } from './components/article/articleDetails';

//Styles
import { Wrapper } from './Start.css';

export const Start: React.FC = () => {
  return (
    <Wrapper>
      <ArticlesList />
    </Wrapper>
  );
};
