import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Heading } from "@chakra-ui/react";
import SearchInput from "./common/SearchInput";
import { searchPosts } from "../store/actions/PostsActions";
import PostsList from "./Posts/PostsList";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const searchedPosts = useSelector((state) => state.searchedPosts);

  const dispatch = useDispatch();

  const searchPostHandler = (e) => {
    const { value } = e.target;

    setTimeout(() => {
      setSearch(value);
      if (value.length > 2) {
        dispatch(searchPosts(search));
      }
    }, 200);
  };

  console.log(searchedPosts);

  return (
    <Container maxW="container.xl">
      <Heading mb={10} size="3xl">
        Home Page
      </Heading>
      <SearchInput
        changeHandler={searchPostHandler}
        style={{ minWidth: "50%" }}
      />

      <PostsList posts={searchedPosts} />
    </Container>
  );
};

export default HomePage;
