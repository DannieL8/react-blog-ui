import React, { useEffect, useState } from "react";
import PostsList from "./PostsList";
import { useSelector, useDispatch } from "react-redux";
import { loadPostsPage } from "../../store/actions/PostsActions";
import { Container } from "@chakra-ui/react";
import { CircularProgress, Heading } from "@chakra-ui/react";
import Pagination from "../common/Pagination";

const AllPostsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [pageChanged, setPageChanged] = useState(false);

  const postsState = useSelector((state) => {
    return {
      posts: state.postsPage.posts,
      totalPages: state.postsPage.totalPages,
      error: state.postsPage.error,
      errrorMessage: state.postsPage.errorMessage,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (postsState.posts.length === 0 || pageChanged) {
      const options = {
        page: currentPage,
        size: postsPerPage,
      };
      dispatch(loadPostsPage(options));
      setPageChanged(false);
    }
  }, [postsPerPage, currentPage, dispatch, postsState.posts, pageChanged]);

  const paginateHandler = (page) => {
    if (
      page === 0 ||
      page < 0 ||
      page === "" ||
      page === "-" ||
      page > postsState.totalPages
    )
      return;
    setCurrentPage(page - 1);
    setPageChanged(true);
  };

  const changePage = (isNext) => {
    const pageNumber = isNext ? currentPage + 1 : currentPage - 1;
    setCurrentPage(pageNumber);
    return pageNumber;
  };

  const nextPageHandler = () => {
    const pageNumber = changePage(true);
    const options = { page: pageNumber, size: postsPerPage };

    dispatch(loadPostsPage(options));
  };

  const prevPageHandler = () => {
    const pageNumber = changePage(false);
    const options = { page: pageNumber, size: postsPerPage };

    dispatch(loadPostsPage(options));
  };

  const showMorePostsPerPageHandler = (event) => {
    event.preventDefault();
    const size = event.target.value;

    setPostsPerPage(parseInt(size));
    setPageChanged(true);
  };

  return (
    <Container maxW="container.xl">
      <Heading fontSize="4xl" mb="10">
        Posts
      </Heading>
      {postsState.posts.length > 0 ? (
        <>
          <PostsList
            error={postsState.error}
            errorMessage={postsState.errrorMessage}
            posts={postsState.posts}
          />
          <div style={{ marginTop: 20 }} />

          <Pagination
            postsPerPage={postsPerPage}
            totalPages={postsState.totalPages}
            paginate={paginateHandler}
            nextPage={nextPageHandler}
            prevPage={prevPageHandler}
            currentPage={currentPage + 1}
            showMoreElements={showMorePostsPerPageHandler}
          />
        </>
      ) : (
        <CircularProgress isIndeterminate color="#4299E1" />
      )}
    </Container>
  );
};

export default AllPostsPage;
