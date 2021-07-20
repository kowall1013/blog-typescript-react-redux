//Inner
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { UserComment } from '../../components';
import { ArticleDetails } from '../start/components/article/articleDetails';

//Styles
import { Wrapper } from './Favourite.css';

export const Favourite: React.FC = () => {
  const favComments = useTypedSelector((state) => state.comments.favourite);
  const favPosts = useTypedSelector((state) => state.articles.favourite);

  return (
    <Wrapper>
      <h1>Favourite Comments and Posts</h1>
      <div className="comment">
        <h2>Comments</h2>
        {favComments.map((comment) => (
          <UserComment
            key={comment.name}
            body={comment.body}
            email={comment.email}
            name={comment.name}
            inFavourite={true}
          />
        ))}
      </div>
      <div className="articles">
        <h2>Posts</h2>
        {favPosts.map((post) => (
          <ArticleDetails key={post.id} inFavourite={true} idPost={post.id} />
        ))}
      </div>
    </Wrapper>
  );
};
