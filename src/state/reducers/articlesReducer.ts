//Inner
import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ArticlesState {
  loading: boolean;
  error: string | null;
  articles: Posts[];
}

const initialState = {
  loading: false,
  error: null,
  articles: [],
};

const reducer = (state: ArticlesState = initialState, action: Action) => {
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
        articles: action.payload,
      };
    case ActionType.FETCH_ARTICLES_ERROR:
      return {
        loading: false,
        error: action.payload,
        articles: [],
      };
    default:
      return state;
  }
};

export default reducer;
