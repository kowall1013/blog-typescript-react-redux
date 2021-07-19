//Outter
import { combineReducers } from 'redux';

//Inner
import articlesReducer from './articlesReducer';
import commentsReducer from './commentsReducer';

const reducers = combineReducers({
  articles: articlesReducer,
  comments: commentsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
