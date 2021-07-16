//Outter
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

//Inner
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
