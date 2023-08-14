import React, { useState } from "react";
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

export const LoginBody: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function setTokens(tokens: any) {
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
  }

  const navigate = useNavigate();

  async function login(username: string, password: string) {
    const request = await fetch(`http://localhost:3000/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (request.status !== 200) return;

    const response = await request.json();

    setTokens(response);

    navigate("/admin");

    return;
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
            onClick={() => {
              login(username, password);
            }}
          >
            Login
          </Button>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
