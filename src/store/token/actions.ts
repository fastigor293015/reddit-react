import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootReducer";

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
})

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const windowToken = window.__token__,
        localToken = localStorage.getItem('token');

  if (windowToken && windowToken !== 'undefined') {
    dispatch(setToken(windowToken));
    localStorage.setItem('token', windowToken);
  } else {
    if (localToken) {
      dispatch(setToken(localToken));
    }
  }
}
