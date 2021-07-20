//Outter
import { combineReducers } from 'redux';

//Inner
import articlesReducer from './articlesReducer';
import { commentReducer } from './commentsReducer';

const reducers = combineReducers({
  articles: articlesReducer,
  comments: commentReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
