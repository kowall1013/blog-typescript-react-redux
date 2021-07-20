//Outter
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

//Styled and icons
import { Wrapper } from './Article.css';
import photo_1 from '../../../../images/photo_1.jpg';
import photo_2 from '../../../../images/photo_2.jpg';
import photo_3 from '../../../../images/photo_3.jpg';
import { MdDateRange } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

interface Props {
  item: {
    body?: string;
    id?: number;
    title?: string;
    userId?: number;
  };
}

//Generating unique images for articles, because Api NOT PROVIDED any images
const images = [photo_1, photo_2, photo_3];

const imageIndex = (): number => {
  return Math.floor(Math.random() * 3);
};

export const Article: React.FC<Props> = ({ item }) => {
  const { body, id, title } = item;
  const imgIndex = imageIndex();
  const maxChar = body?.slice(0, 100);

  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <Wrapper className="content">
        <div className="content_image">
          <img src={images[imgIndex]} alt="" />
        </div>
        <h3 className="content_title">{title}</h3>
        <div className="content_meta">
          <MdDateRange />
          <span>July 8, 2021</span>
          <FaRegComments />
          <span>3</span>
        </div>
        <div className="content_description">{maxChar}...</div>

        <Link to={`/posts/${id}`} className="content_readmore">
          <span>READ MORE</span>
          <BsArrowRight />
        </Link>
      </Wrapper>
    </IconContext.Provider>
  );
};
