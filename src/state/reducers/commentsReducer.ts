//Inner
import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface Comment {
  postId?: number;
  id?: number;
  name: string;
  body: string;
  email: string;
}

interface ArticlesState {
  loading: boolean;
  error: string | null;
  comments: Comment[];
  favourite: Comment[][];
}

const initialState = {
  loading: false,
  error: null,
  comments: [],
  favourite: [],
};

const reducer = (state: ArticlesState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case ActionType.FETCH_COMMENT_SUCCESS:
      return {
        loading: false,
        error: null,
        comments: action.payload,
        favourite: [],
      };
    case ActionType.FETCH_COMMENT_ERROR:
      return {
        loading: false,
        error: action.payload,
        comments: [],
        favourite: [],
      };
    case ActionType.ADD_COMMENT_TO_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
