import React from "react";
import {
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import AboutAuthor from "./AuthorInformation";
import { NavLink } from "react-router-dom";

const SinglePost = ({ post }) => (
  <Container maxW={"container.xl"}>
    <Heading mb={10} size="3xl">
      {post.title}
    </Heading>
    <Text fontSize="xl">{post.body}</Text>
    <hr style={{ marginTop: 30, marginBottom: 30 }} />
    <Text fontSize="xl" align="left">
      About the author:
    </Text>
    <Flex style={{ marginTop: 20 }}>
      <AboutAuthor author={post} />
      <Spacer />
      <NavLink to={`/manage-posts/${post.id}`}>
        <Button>Edit post</Button>
      </NavLink>
    </Flex>
  </Container>
);

export default SinglePost;
