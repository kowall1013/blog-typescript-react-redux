//Styles and Images
import pngegg from '../../images/pngegg.png';
import { Wrapper } from './Logo.css';

export const Logo: React.FC = () => {
  return (
    <Wrapper>
      <img src={pngegg} alt="" />
    </Wrapper>
  );
};
