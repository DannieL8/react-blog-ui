import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleAuthor from "./SingleAuthor";
import {
  loadAuthorPosts,
  loadOneAuthor,
} from "../../store/actions/AuthorsActions";
import { CircularProgress } from "@chakra-ui/react";

const SingleAuthorPage = (props) => {
  const idAuthor = parseInt(props.match.params.id);

  // const getAuthorById = (authors, id) => {
  //   return authors.find((author) => author.id === parseInt(id));
  // };

  // const getAuthorPosts = (posts, id) => {
  //   return posts.filter((posts) => posts.user.id === parseInt(id));
  // };

  const authorState = useSelector((state) => {
    return {
      author: state.authorsState.singleAuthor,
      authorPosts: state.authorsState.authorPosts,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (authorState.authorPosts.length === 0) {
      dispatch(loadAuthorPosts(idAuthor));
    }
    if (!authorState.author || parseInt(authorState.author.id) !== idAuthor) {
      dispatch(loadOneAuthor(idAuthor));
    }

    //Clean up function example.
    return () => {
      console.log("Clean up");
    };
  }, [dispatch, authorState, idAuthor]);

  return (
    <>
      {authorState.author && authorState.authorPosts.length > 0 ? (
        <SingleAuthor
          author={authorState.author}
          authorPosts={authorState.authorPosts}
        />
      ) : (
        <CircularProgress isIndeterminate color="primary" />
      )}
    </>
  );
};

export default SingleAuthorPage;
