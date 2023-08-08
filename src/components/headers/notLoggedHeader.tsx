import { Box, Button, Flex, Link, Spacer } from "@chakra-ui/react";
import { IconHome } from "@tabler/icons-react";
export function NotLoggedHeader() {
  return (
    <Box bg={"#1A1B1E"} h={"80px"} p={5}>
      <Flex alignItems={"center"} h="100%">
        <Link href="/">
          <Button leftIcon={<IconHome />}> Home </Button>
        </Link>
        <Spacer />
        <Link href="/login">
          <Button>Log in</Button>
        </Link>
        <Link href="/register">
          <Button
            marginLeft={"20px"}
            bg={"blue.600"}
            _hover={{ bg: "blue.500" }}
            _active={{ bg: "blue.400" }}
          >
            Sign up
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
