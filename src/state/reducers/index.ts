//Outter
import { combineReducers } from 'redux';

//Inner
import articlesReducer from './articlesReducer';

const reducers = combineReducers({
  articles: articlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
