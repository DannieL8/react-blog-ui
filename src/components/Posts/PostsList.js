import React from "react";
import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostsList = ({ posts, error, errorMessage }) => (
  <SimpleGrid columns={3} spacing={10}>
    {error
      ? errorMessage
      : posts?.map((post) => (
          <Box
            style={{ padding: 15 }}
            key={post.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
            }}
          >
            <h2 style={{ fontWeight: "bold", marginBottom: 5 }}>
              {post.title}
            </h2>

            <span>{post.body}</span>

            <div style={{ marginTop: 15 }}>
              <Button
                variant="outline"
                _hover={{
                  background: "secondary",
                  color: "white",
                }}
              >
                <Link to={`/posts/${post.id}`}>More...</Link>
              </Button>
            </div>
          </Box>
        ))}
  </SimpleGrid>
);

export default PostsList;
