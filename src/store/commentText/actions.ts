import { ActionCreator } from "redux";

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentTextAction = {
  type: typeof UPDATE_COMMENT;
  comment: string;
}
export const updateComment: ActionCreator<UpdateCommentTextAction> = (comment: string) => ({
  type: UPDATE_COMMENT,
  comment,
})
