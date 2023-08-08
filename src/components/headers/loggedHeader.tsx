import { Box, Button, Flex, IconButton, Link, Spacer } from "@chakra-ui/react";
import { IconHome, IconLogout } from "@tabler/icons-react";
export function LoggedHeader() {
  return (
    <Box bg={"#1A1B1E"} h={"80px"} p={5}>
      <Flex alignItems={"center"} h="100%">
        <Link href="/">
          <Button leftIcon={<IconHome />}> Home </Button>
        </Link>
        <Spacer />
        <Link href="/">
          <IconButton
            icon={<IconLogout />}
            aria-label={"Log out"}
            bg={"red.600"}
            _hover={{ bg: "red.500" }}
            _active={{ bg: "red.400" }}
          ></IconButton>
        </Link>
      </Flex>
    </Box>
  );
}
