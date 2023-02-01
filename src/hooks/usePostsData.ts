import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPostsData, postsRequestAsync } from "../store/posts/actions";
import { RootState } from "../store/rootReducer";

export function usePostsData() {
  const token = useSelector<RootState, string>(state => state.token);
  const data = useSelector<RootState, IPostsData[]>(state => state.posts.data);
  const loading = useSelector<RootState, boolean>(state => state.posts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || token === 'undefined') return;
    dispatch(postsRequestAsync());
  }, [token]);

  return {
    data,
    loading,
  };
}
