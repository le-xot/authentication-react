import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

export const RegisterBody: React.FC = () => {
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
            <Input type="text" placeholder="Your password" />
          </FormControl>
          <Button variant={"solid"}>Register</Button>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
