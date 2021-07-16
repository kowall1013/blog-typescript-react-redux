//Outter
import { useSelector, TypedUseSelectorHook } from 'react-redux';

//Inner
import { RootState } from '../state';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
