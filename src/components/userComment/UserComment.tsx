//Outter
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Inner
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelectors';

//Styles and Icons
import { Wrapper } from './UserComment.css';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';

interface Props {
  body: string;
  email: string;
  name: string;
}

export const UserComment = ({ body, email, name }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { AddCommentToFavourite } = useActions();
  const state = useTypedSelector((state) => state);
  console.log('madafacuka', state);
  const handleClick = () => {
    setIsFavourite(!isFavourite);
    isFavourite ? toast.dark('Delete from favourite') : toast.success('Add to favourite');
    AddCommentToFavourite({ body, email, name });
  };
  return (
    <Wrapper>
      <div className="header">
        <h3>{name}</h3>
        <IconContext.Provider value={{ className: `${isFavourite ? 'favourite_not' : 'favourite'}` }}>
          <AiFillStar onClick={handleClick} />
          <ToastContainer position="bottom-left" hideProgressBar={true} />
        </IconContext.Provider>
      </div>

      <p>{body}</p>
      <span>{email}</span>
    </Wrapper>
  );
};
