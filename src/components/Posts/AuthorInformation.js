import React from "react";
import { Box, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AuthorInformation = ({ author }) => (
  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Box p="6">
      <Box display="flex" alignItems="baseline">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          Author
        </Badge>
        <Box mt="1" ml="3" fontWeight="semibold" as="h4" lineHeight="tight">
          <Link to={`/authors/${author.userId}`}>{author.name} </Link>
        </Box>
      </Box>

      <Box
        mt="5"
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >
        email: {author.email} &bull; username: {author.username}
      </Box>
      <Box display="flex" mt="2" alignItems="center">
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          50 reviews
        </Box>
      </Box>
    </Box>
  </Box>
);

export default AuthorInformation;
