//Outter
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

//Inner
import { useTypedSelector } from '../../../../../hooks/useTypedSelectors';
import { useActions } from '../../../../../hooks/useActions';
import { UserComment } from '../../../../../components';

//Styled and icons
import { Wrapper } from './ArticleDetails.css';
import photo_1 from '../../../../../images/photo_1.jpg';
import photo_2 from '../../../../../images/photo_2.jpg';
import photo_3 from '../../../../../images/photo_3.jpg';
import { MdDateRange } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';

interface Params {
  id: string;
}

interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//Generating unique images for articles, because Api NOT PROVIDED any images
const images = [photo_1, photo_2, photo_3];

const imageIndex = (): number => {
  return Math.floor(Math.random() * 3);
};

export const ArticleDetails = () => {
  const params: Params = useParams();
  const history = useHistory();
  const { fetchArticles, fetchComment } = useActions();
  const articles = useTypedSelector((state) => state.articles.posts);
  const comments = useTypedSelector((state) => state.comments.comments);

  //ID query params
  const id = Number(params.id);

  //Filter 1 article from list
  const article = articles?.find((article) => article.id === id);

  //Index to randomly select image
  const imgIndex = imageIndex();

  useEffect(() => {
    fetchArticles();
    fetchComment(id);
  }, []);

  const handlePreviousClick = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <div className="content_image">
        <img src={images[imgIndex]} alt="" />
      </div>
      <h1 className="content_title">{article?.title}</h1>
      <div className="content_meta">
        <MdDateRange />
        <span>July 8, 2021</span>
        <FaRegComments />
        <span>3</span>
      </div>
      <div className="content_description">{article?.body}</div>
      <div className="content_comments">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <UserComment key={comment.id} body={comment.body} email={comment.email} name={comment.name} />
        ))}
      </div>
      <button className="content_previous" onClick={handlePreviousClick}>
        Previous Page
      </button>
    </Wrapper>
  );
};
