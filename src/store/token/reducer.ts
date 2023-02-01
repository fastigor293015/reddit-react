import { Reducer } from "redux";
import { SetTokenAction, SET_TOKEN } from "./actions";

export const tokenInitialState: string = '';

export type TokenActions = SetTokenAction;
export const tokenReducer: Reducer<string, TokenActions> = (state = tokenInitialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
}
