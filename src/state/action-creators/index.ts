//Outter
import { Dispatch } from 'redux';

//Inner
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const fetchArticles = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_ARTICLES,
    });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
