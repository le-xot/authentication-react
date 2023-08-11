import React from "react";
import {
  Box,
  Link,
  Flex,
  Input,
  Button,
  FormLabel,
  SimpleGrid,
  FormControl,
} from "@chakra-ui/react";

export const LoginBody: React.FC = () => {
  return (
    <Box h={`calc(100vh - 80px)`} bg={"#141517"}>
      <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
        <SimpleGrid>
          <FormControl w={"500px"} paddingBottom={"20px"}>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Your username" />
          </FormControl>
          <FormControl paddingBottom={"20px"}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Your password" />
          </FormControl>
          <Link href="/admin">
            <Button variant={"solid"} w={"500px"} type="submit">
              Login
            </Button>
          </Link>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
