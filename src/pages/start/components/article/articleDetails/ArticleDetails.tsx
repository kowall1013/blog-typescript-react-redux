//Outter
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

//Inner
import { useTypedSelector } from '../../../../../hooks/useTypedSelectors';
import { useActions } from '../../../../../hooks/useActions';

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

export const ArticleDetails: React.FC = (props) => {
  const params: Params = useParams();
  const { fetchArticles } = useActions();
  const articles = useTypedSelector((state) => state.articles.posts);

  const id = Number(params.id);

  //Filter 1 article from list
  const article: Article | undefined = articles.find((article) => article.id === id);

  const imgIndex = imageIndex();
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
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
        <div className="content_comments"></div>
      </Wrapper>
      <Wrapper></Wrapper>
    </>
  );
};
