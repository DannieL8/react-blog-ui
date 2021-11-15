import React from "react";
import {
  Container,
  Heading,
  Box,
  Avatar,
  AvatarBadge,
  Flex,
  Text,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import MapIcon from "../../assets/icons/mapIcon";
import PhoneIcon from "../../assets/icons/phoneIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import AuthorPosts from "./AuthorPosts";

const SingleAuthor = ({ author, authorPosts }) => (
  <Container maxW="full">
    <Heading mb="3" fontSize="7xl">
      {author.name}
    </Heading>
    <hr />
    <Container maxW="container.lg">
      <Flex direction="row" mt="20" maxW="3xl">
        <Box ml="100" mr="100" pb="5">
          <Avatar size="2xl">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </Box>
        <Box
          p="5"
          maxW="xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Text fontSize="lg" fontWeight="bold">
            About the author:
          </Text>

          <hr style={{ marginBottom: 10 }} />
          <Flex align="center" justify="center" direction="row">
            <Flex align="center" justify="center" direction="column">
              <Icon as={MapIcon} w="50" h="50" />
              <Text fontSize="md" fontWeight="bold">
                {author.addressStreet}
              </Text>
            </Flex>
            <Spacer />
            <Flex align="center" justify="center" direction="column">
              <Icon as={PhoneIcon} w="50" h="50" />
              <Text fontSize="md" fontWeight="bold">
                {author.phone}
              </Text>
            </Flex>{" "}
            <Spacer />
            <Flex align="center" justify="center" direction="column">
              <Icon as={EmailIcon} w="50" h="50" />
              <Text fontSize="md" fontWeight="bold">
                {author.email}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Heading textAlign="center" mb="10" mt="50" fontSize="4xl">
        Author Posts:
      </Heading>
      <AuthorPosts posts={authorPosts} />
    </Container>
  </Container>
);

export default SingleAuthor;
