import React from "react";
import { Box, Avatar, AvatarBadge, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AuthorItem = ({ author }) => (
  <Box
    m="10"
    p="5"
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
  >
    <Box pb="5">
      <Avatar>
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
    </Box>
    <Box pb="5">
      <Text fontSize="md" fontWeight="bold">
        {author.name}
      </Text>
    </Box>
    <Link to={`/authors/${author.id}`}>
      <Button
        _hover={{
          background: "secondary",
          color: "white",
        }}
      >
        Profile
      </Button>
    </Link>
  </Box>
);

export default AuthorItem;
