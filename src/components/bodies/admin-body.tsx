import React from "react";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/types";
import { decrementCounter, incrementCounter } from "../redux/actions";

export const AdminBody: React.FC = () => {
  const counter = useSelector((state: AppState) => state.counter);
  const dispatch = useDispatch();
  return (
    <Box h={`calc(100vh - 80px)`} bg={"#141517"}>
      <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
        <SimpleGrid justifyContent={"center"} alignItems={"center"}>
          <Text fontSize={"2xl"} m={"5px"} w={"200px"}>
            Counter: {counter}
          </Text>
          <Button m={"5px"} onClick={() => dispatch(incrementCounter())}>
            Increment
          </Button>
          <Button m={"5px"} onClick={() => dispatch(decrementCounter())}>
            Decrement
          </Button>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
