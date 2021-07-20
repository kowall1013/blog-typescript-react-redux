//Inner
import { isTemplateExpression } from 'typescript';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface Comment {
  postId?: number;
  id?: number;
  name: string;
  body: string;
  email: string;
}

export type FilteredComment = {
  name: string;
  body: string;
  email: string;
};

interface CommentState {
  loading: boolean;
  error: string | null;
  comments: Comment[];
  favourite: FilteredComment[][];
}

const initialState = {
  loading: false,
  error: null,
  comments: [],
  favourite: [],
};

export const commentReducer = (state: CommentState = initialState, action: Action) => {
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
        favourite: [...state.favourite],
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
    case ActionType.DELETE_COMMENT_FROM_FAVOURITE:
      return {
        ...state,
        favourite: [],
      };

    default:
      return state;
  }
};
