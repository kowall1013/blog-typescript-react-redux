//Inner
import { ActionType } from '../action-types';
import { Posts } from '../reducers/articlesReducer';

interface FetchArticlesAction {
  type: ActionType.FETCH_ARTICLES;
}

interface FetchArticlesSuccessAction {
  type: ActionType.FETCH_ARTICLES_SUCCESS;
  payload: Posts[];
}

interface FetchArticlesErrorAction {
  type: ActionType.FETCH_ARTICLES_ERROR;
  payload: string;
}

export type Action = FetchArticlesAction | FetchArticlesSuccessAction | FetchArticlesErrorAction;
