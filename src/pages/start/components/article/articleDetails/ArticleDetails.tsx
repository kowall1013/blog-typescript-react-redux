//Outter
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { ToastContainer, toast } from 'react-toastify';

//Inner
import { useTypedSelector } from '../../../../../hooks/useTypedSelectors';
import { UserComment, Button } from '../../../../../components';
import { useActions } from '../../../../../hooks/useActions';

//Styled and icons
import { Wrapper } from './ArticleDetails.css';
import photo_1 from '../../../../../images/photo_1.jpg';
import photo_2 from '../../../../../images/photo_2.jpg';
import photo_3 from '../../../../../images/photo_3.jpg';
import { MdDateRange } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';

//Types
interface Params {
  id: string;
}

interface Props {
  inFavourite?: boolean;
  idPost?: number;
}

//Generating unique images for articles, because Api NOT PROVIDED any images
const images = [photo_1, photo_2, photo_3];

const imageIndex = (): number => {
  return Math.floor(Math.random() * 3);
};

export const ArticleDetails = ({ inFavourite, idPost }: Props) => {
  const [isFavouriteCom, setIsFavourite] = useState(false);

  //react router stuff
  const params: Params = useParams();
  const history = useHistory();

  //Redus state
  const articles = useTypedSelector((state) => state.articles.posts);
  const comments = useTypedSelector((state) => state.comments.comments);
  const { fetchArticles, fetchComment, deletePostFromFavourite, addPostToFavourite } = useActions();

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
    history.push('/');
  };

  //add post to favourite list
  const handleClick = () => {
    setIsFavourite(!isFavouriteCom);
    addPostToFavourite({
      title: article?.title,
      body: article?.body,
      id: article?.id,
      userId: article?.userId,
    });
    isFavouriteCom ? toast.dark('Delete from favourite') : toast.success('Add to favourite');
  };

  //delete post from favourite list
  const handleDeletePost = () => {
    toast.dark('Delete from favourite');
    deletePostFromFavourite(idPost);
  };

  const postInFavourite = inFavourite ? (
    <Button title="Delete from Favourite" onChange={handleDeletePost} />
  ) : (
    <IconContext.Provider value={{ className: 'content_favourite' }}>
      <AiFillStar onClick={handleClick} />
    </IconContext.Provider>
  );

  return (
    <Wrapper>
      {postInFavourite}
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
        {inFavourite ? 'Go to Home Page' : 'Previous page'}
      </button>
      <ToastContainer position="bottom-left" hideProgressBar={true} />
    </Wrapper>
  );
};
