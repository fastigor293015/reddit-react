import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootReducer";


export const POSTS_REQUEST = 'POSTS_REQUEST';
export type PostsRequestAction = {
  type: typeof POSTS_REQUEST;
}
export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
  type: POSTS_REQUEST,
})

export interface IPostsData {
  data: {
    id: string;
    subreddit: string;
    author: string;
    thumbnail: string;
    title: string;
    created: number;
    score: number;
    num_comments: number;
  };
}
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  data: IPostsData[];
}
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (data: IPostsData[]) => ({
  type: POSTS_REQUEST_SUCCESS,
  data
})

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
}
export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
  type: POSTS_REQUEST_ERROR,
  error
})

export const postsRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(postsRequest());
  axios.get('https://oauth.reddit.com/best?sr_detail=true', {
    headers: { Authorization: `bearer ${getState().token}` }
  })
  .then(res => {
    const postsRes = res.data?.data?.children;
    dispatch(postsRequestSuccess(postsRes));
    console.log(postsRes);
  })
  .catch((error) => {
    dispatch(postsRequestError(String(error)));
  });
}

