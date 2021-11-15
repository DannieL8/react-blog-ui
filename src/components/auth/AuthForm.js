import {
  Box,
  Container,
  Input,
  FormLabel,
  FormControl,
  Heading,
  Button,
} from "@chakra-ui/react";

const AuthForm = ({ login, loading, changeHandler }) => (
  <Container
    maxW="full"
    h="100vh"
    centerContent
    bgGradient="linear-gradient(to right, #2c3e50, #3498db);"
  >
    <Box m="auto">
      <Box
        bg="white"
        pt="10"
        pr="20"
        pl="20"
        pb="10"
        rounded="25"
        shadow="4px 2px 37px 3px rgba(61,177,255,0.62);"
      >
        <Heading textColor="facebook.500" size="4xl">
          Blogger
        </Heading>

        <FormControl id="username" mt="10">
          <FormLabel>Username</FormLabel>
          <Input onChange={changeHandler} name="username" type="text" />
        </FormControl>

        <FormControl id="password" mt="10">
          <FormLabel>Password</FormLabel>
          <Input onChange={changeHandler} name="password" type="password" />
        </FormControl>

        <Button
          mt="10"
          rounded="17"
          size="lg"
          color="white"
          bgGradient="linear-gradient(to right, #2c3e50, #3498db);"
          _hover={{ bg: "linear-gradient(to right, #3498db, #2e3e50);" }}
          onClick={login}
        >
          Login
        </Button>
      </Box>
    </Box>
  </Container>
);

export default AuthForm;
