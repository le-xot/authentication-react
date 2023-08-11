import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Input,
  Button,
  FormLabel,
  SimpleGrid,
  FormControl,
  Text,
} from "@chakra-ui/react";
import { redirect } from "react-router-dom";

export const RegisterBody: React.FC = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [tokens, setTokens] = useState<{ accessToken: string, refreshToken: string } | null>(null);

  async function register(username: string, password: string) {
    const request = await fetch(`http://localhost:3000/user/register`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username,
        password,
      })
    });

    console.log(request.status);
    if (request.status !== 200) return;

    const response = await request.json();
    
    console.log(response);

    setTokens(response);

    redirect("/admin");
  }


  return (
    <Box h={`calc(100vh - 80px)`} bg={"#141517"}>
      <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
        <SimpleGrid>
          <FormControl w={"500px"} paddingBottom={"20px"}>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Your username" onChange={(e) => setUsername(e.target.value)} />
          </FormControl>

          <FormControl paddingBottom={"20px"}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>

          {/* <Link href="/admin"> */}
            <Button
              variant={"solid"}
              w={"500px"}
              type="submit"
              bg={"blue.600"}
              _hover={{ bg: "blue.500" }}
              _active={{ bg: "blue.400" }}
              onClick={()=>{ register(username, password); }}
            >
              Register 
            </Button>
          {/* </Link> */}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
