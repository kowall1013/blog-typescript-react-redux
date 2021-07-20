//Outter
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Inner
import { useActions } from '../../hooks/useActions';

//Styles and Icons
import { Wrapper } from './UserComment.css';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';

interface Props {
  body: string;
  email: string;
  name: string;
  inFavourite?: boolean;
}

export const UserComment = ({ body, email, name, inFavourite }: Props) => {
  const [isFavouriteCom, setIsFavourite] = useState(false);
  const { addCommentToFavourite, deleteCommentToFavourite } = useActions();

  const handleClick = () => {
    setIsFavourite(!isFavouriteCom);
    isFavouriteCom ? toast.dark('Delete from favourite') : toast.success('Add to favourite');
    isFavouriteCom ? deleteCommentToFavourite(name) : addCommentToFavourite({ name, body, email });
  };

  const handleClickFavourite = () => {
    setIsFavourite(false);
    toast.dark('Delete from favourite');
    deleteCommentToFavourite(name);
  };

  //Depending comment is in favourite or not will have a little bit diffrenat functionality
  const commentIsInFavourite = inFavourite ? (
    <IconContext.Provider value={{ className: 'favourite_not' }}>
      <AiFillStar onClick={handleClickFavourite} />
    </IconContext.Provider>
  ) : (
    <IconContext.Provider value={{ className: `${isFavouriteCom ? 'favourite_not' : 'favourite'}` }}>
      <AiFillStar onClick={handleClick} />
    </IconContext.Provider>
  );

  return (
    <Wrapper>
      <div className="header">
        <h3>{name}</h3>
        {commentIsInFavourite}
      </div>
      <ToastContainer position="bottom-left" hideProgressBar={true} />
      <p>{body}</p>
      <span>{email}</span>
    </Wrapper>
  );
};
