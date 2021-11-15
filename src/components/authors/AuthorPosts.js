import React from "react";
import { Table, Thead, Tbody, Button, Tr, Th, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const AuthorPosts = ({ posts }) => (
  <Table size="sm">
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th />
      </Tr>
    </Thead>
    <Tbody>
      {posts?.map((post) => (
        <Tr key={post.id}>
          <Td>{post.title}</Td>
          <Td>
            <Link to={`../posts/${post.id}`}>
              <Button>View Post</Button>
            </Link>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default AuthorPosts;
