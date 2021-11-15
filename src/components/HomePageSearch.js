import React from "react";
import PostsList from "./Posts/PostsList";

const HomePageSearch = ({ searchedPosts }) => (
  <>
    <PostsList posts={searchedPosts} />
  </>
);

export default HomePageSearch;
