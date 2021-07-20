//Inner
import { ActionType } from '../action-types';
import { Posts } from '../reducers/articlesReducer';
import { Comment } from '../reducers/commentsReducer';

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
  payload: Comment[];
}

interface FetchCommentErrorAction {
  type: ActionType.FETCH_COMMENT_ERROR;
  payload: string;
}

interface AddCommentToFavourite {
  type: ActionType.ADD_COMMENT_TO_FAVOURITE;
  payload: Comment[];
}

interface DeleteCommentFromFavourite {
  type: ActionType.DELETE_COMMENT_FROM_FAVOURITE;
  payload: string;
}

export type Action =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesErrorAction
  | FetchCommentAction
  | FetchCommentSuccessAction
  | FetchCommentErrorAction
  | AddCommentToFavourite
  | DeleteCommentFromFavourite;
