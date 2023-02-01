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

  console.log('завупа')
  if (windowToken && windowToken !== 'undefined') {
    console.log('В window есть токена')
    dispatch(setToken(windowToken));
    localStorage.setItem('token', windowToken);
  } else {
    if (localToken) {
      console.log('В localStorage есть токен')
      dispatch(setToken(localToken));
    }
  }
}
