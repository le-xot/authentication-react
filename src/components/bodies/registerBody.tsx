import React from "react";
import {
  Box,
  Flex,
  Link,
  Input,
  Button,
  FormLabel,
  SimpleGrid,
  FormControl,
} from "@chakra-ui/react";

export const RegisterBody: React.FC = () => {
  return (
    <Box h={`calc(100vh - 80px)`} bg={"#141517"}>
      <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
        <SimpleGrid>
          <FormControl w={"500px"} paddingBottom={"20px"} isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Your username" />
          </FormControl>
          <FormControl paddingBottom={"20px"} isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Your password" />
          </FormControl>
          <Link href="/admin">
            <Button
              variant={"solid"}
              w={"500px"}
              type="submit"
              bg={"blue.600"}
              _hover={{ bg: "blue.500" }}
              _active={{ bg: "blue.400" }}
            >
              Register
            </Button>
          </Link>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
