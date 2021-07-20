//Outter
import { Dispatch } from 'redux';

//Inner
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Comment } from '../reducers/commentsReducer';
import { Posts } from '../reducers/articlesReducer';

export const fetchArticles = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_ARTICLES,
    });

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await response.json();

      dispatch({
        type: ActionType.FETCH_ARTICLES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_ARTICLES_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchComment = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_COMMENT,
    });

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const data = await response.json();

      dispatch({
        type: ActionType.FETCH_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_COMMENT_ERROR,
        payload: error.message,
      });
    }
  };
};

export const addCommentToFavourite = (comment: Comment) => {
  return {
    type: ActionType.ADD_COMMENT_TO_FAVOURITE,
    payload: comment,
  };
};

export const deleteCommentToFavourite = (name: string) => {
  return {
    type: ActionType.DELETE_COMMENT_FROM_FAVOURITE,
    payload: name,
  };
};

export const addPostToFavourite = (post: Posts) => {
  return {
    type: ActionType.ADD_POST_TO_FAVOURITE,
    payload: post,
  };
};

export const deletePostFromFavourite = (id?: number) => {
  return {
    type: ActionType.DELETE_POST_FROM_FAVOURITE,
    payload: id,
  };
};
