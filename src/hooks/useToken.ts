import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { saveToken } from "../store/token/actions";

export function useToken() {
  const token = useSelector<RootState, string>(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, []);

  return [token];
}
