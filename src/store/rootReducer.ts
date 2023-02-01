import { Reducer } from "redux";
import { UPDATE_COMMENT } from "./commentText/actions";
import { CommentTextActions, commentTextInitialState, commentTextReducer } from "./commentText/reducer";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { MeActions, meInitialState, meReducer, MeState } from "./me/reducer";
import { POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./posts/actions";
import { PostsActions, postsInitialState, postsReducer, PostsState } from "./posts/reducer";
import { SET_TOKEN } from "./token/actions";
import { TokenActions, tokenInitialState, tokenReducer } from "./token/reducer";

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
  posts: PostsState;
}
const initialState: RootState = {
  commentText: commentTextInitialState,
  token: tokenInitialState,
  me: meInitialState,
  posts: postsInitialState,
}

type MyAction = CommentTextActions
  | TokenActions
  | MeActions
  | PostsActions;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: commentTextReducer(state.commentText, action),
      }
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      }
    // Композиция редьюсеров
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    case POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESS:
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      }

    default:
      return state;
  }
}
