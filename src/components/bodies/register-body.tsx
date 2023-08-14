import React, { useContext, useState } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  FormLabel,
  SimpleGrid,
  FormControl,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../hooks/userContext";

export const RegisterBody: React.FC = () => {
  const userContext = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function register(username: string, password: string) {
    const request = await fetch(`http://localhost:3000/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (request.status !== 200) return;

    const response = await request.json() as Record<string, string>;
    await userContext.login(response.accessToken, response.refreshToken)
    navigate("/admin");
  }

  return (
    <Box h={`calc(100vh - 80px)`} bg={"#141517"}>
      <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
        <SimpleGrid>
          <FormControl w={"500px"} paddingBottom={"20px"}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl paddingBottom={"20px"}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            variant={"solid"}
            w={"500px"}
            type="submit"
            bg={"blue.600"}
            _hover={{ bg: "blue.500" }}
            _active={{ bg: "blue.400" }}
            onClick={() => {
              register(username, password);
            }}
          >
            Register
          </Button>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
