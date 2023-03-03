import { Reducer } from "redux";
import { IPostsData, PostsRequestAction, PostsRequestErrorAction, PostsRequestSuccessAction, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./actions";

export type PostsState = {
  data: IPostsData[];
  after: string;
  loading: boolean;
  error: string;
  loadingsCount: number;
}

export const postsInitialState: PostsState = {
  data: [],
  after: "",
  loading: false,
  error: "",
  loadingsCount: 0,
}

export type PostsActions = PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction;
export const postsReducer: Reducer<PostsState, PostsActions> = (state = postsInitialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.concat(...action.data),
        after: action.after,
        loadingsCount: state.loadingsCount + 1,
      }
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state;
  }
}
