import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import { useSelector, useDispatch } from "react-redux";
import { loadOnePost } from "../../store/actions/PostsActions";
import { CircularProgress } from "@chakra-ui/react";

const SinglePostContainer = (props) => {
  const idReqPost = parseInt(props.match.params.id);

  const postsState = useSelector((state) => ({
    posts: state.postsPage.posts,
    searchedPosts: state.searchedPosts,
    singlePost: state.postsPage.singlePost,
  }));

  const dispatch = useDispatch();
  console.log(postsState.singlePost);
  console.log(idReqPost);
  useEffect(() => {
    if (
      !postsState.singlePost ||
      parseInt(postsState.singlePost.id) !== idReqPost
    ) {
      dispatch(loadOnePost(idReqPost));
    }
  }, [dispatch, postsState.singlePost, idReqPost]);

  return (
    <>
      {!postsState.singlePost ||
      parseInt(postsState.singlePost.id) !== idReqPost ? (
        <CircularProgress isIndeterminate color="primary" />
      ) : (
        <SinglePost post={postsState.singlePost} />
      )}
    </>
  );
};

export default SinglePostContainer;
