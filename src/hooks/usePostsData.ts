import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsRequestAsync } from "../store/posts/actions";
import { PostsState } from "../store/posts/reducer";
import { RootState } from "../store/rootReducer";

export function usePostsData() {
  const token = useSelector<RootState, string>(state => state.token);
  const { data, after, loading, error } = useSelector<RootState, PostsState>(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || token === 'undefined') return;
    dispatch(postsRequestAsync());
  }, [token]);

  return {
    data,
    after,
    loading,
    error,
  };
}
