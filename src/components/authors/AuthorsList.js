import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import AuthorItem from "./AuthorItem";

const AuthorsList = ({ authors }) => (
  <SimpleGrid columns={3} spacing={10}>
    {authors?.map((author) => (
      <AuthorItem key={author.id} author={author} />
    ))}
  </SimpleGrid>
);

export default AuthorsList;
