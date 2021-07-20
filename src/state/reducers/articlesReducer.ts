//Inner
import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Post {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
}

interface ArticlesState {
  loading: boolean;
  error: string | null;
  posts: Posts[];
}

const initialState = {
  loading: false,
  error: null,
  posts: [],
} as ArticlesState;

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_ARTICLES:
      return {
        ...state,
        loading: true,
      };
    case ActionType.FETCH_ARTICLES_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: action.payload,
      };
    case ActionType.FETCH_ARTICLES_ERROR:
      return {
        loading: false,
        error: action.payload,
        posts: [],
      };

    default:
      return state;
  }
};

export default reducer;
