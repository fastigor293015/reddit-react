import { Reducer } from "redux";
import { UpdateCommentTextAction, UPDATE_COMMENT } from "./actions";

export const commentTextInitialState: string = 'Привет, Skillbox!';

export type CommentTextActions = UpdateCommentTextAction;
export const commentTextReducer: Reducer<string, CommentTextActions> = (state = commentTextInitialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return action.comment;
    default:
      return state;
  }
}
