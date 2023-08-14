import { Box, Button, Flex, IconButton, Link, Spacer } from "@chakra-ui/react";
import { IconHome, IconLogout, IconUserShield } from "@tabler/icons-react";
import { UserContext } from "../hooks/userContext";
import { useContext } from "react";
export const Header: React.FC = () => {
  function deleteTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
  const userContext = useContext(UserContext);
  const user = userContext.user;
  return (
    <Box bg={"#1A1B1E"} h={"80px"} p={5}>
      <Flex alignItems={"center"} h="100%">
        <Link href="/">
          <Button leftIcon={<IconHome />}> Home </Button>
        </Link>
        <Spacer />
        {!user && (
          <>
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
          </>
        )}
        {user && (
          <>
            <Link href="/admin">
              <Button leftIcon={<IconUserShield />}> Admin Panel </Button>
            </Link>
            <Link href="/">
              <IconButton
                marginLeft={"20px"}
                icon={<IconLogout />}
                aria-label={"Log out"}
                bg={"red.600"}
                _hover={{ bg: "red.500" }}
                _active={{ bg: "red.400" }}
                onClick={deleteTokens}
              ></IconButton>
            </Link>
          </>
        )}
      </Flex>
    </Box>
  );
};
