//Inner
import { ActionType } from '../action-types';
import { Posts, Post } from '../reducers/articlesReducer';

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

interface FetchCommentAction {
  type: ActionType.FETCH_COMMENT;
}

interface FetchCommentSuccessAction {
  type: ActionType.FETCH_COMMENT_SUCCESS;
  payload: Post[];
}

interface FetchCommentErrorAction {
  type: ActionType.FETCH_COMMENT_ERROR;
  payload: string;
}

interface AddCommentToFavourite {
  type: ActionType.ADD_COMMENT_TO_FAVOURITE;
  payload: Post[];
}

export type Action =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesErrorAction
  | FetchCommentAction
  | FetchCommentSuccessAction
  | FetchCommentErrorAction
  | AddCommentToFavourite;
