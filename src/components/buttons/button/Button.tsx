//Styles
import { Wrapper } from './Button.css';

interface Props {
  title: string;
  onChange: () => void;
}

export const Button: React.FC<Props> = ({ title, onChange }) => {
  return <Wrapper onClick={onChange}>{title}</Wrapper>;
};
