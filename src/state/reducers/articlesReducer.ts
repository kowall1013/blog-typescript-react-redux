//Inner
import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface Posts {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
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
  favourite: Posts[];
}

const initialState = {
  loading: false,
  error: null,
  posts: [],
  favourite: [],
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
        favourite: [...state.favourite],
      };
    case ActionType.FETCH_ARTICLES_ERROR:
      return {
        loading: false,
        error: action.payload,
        posts: [],
        favourite: [],
      };
    case ActionType.ADD_POST_TO_FAVOURITE:
      console.log(state.favourite);
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
