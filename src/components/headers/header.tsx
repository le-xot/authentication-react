import { Box, Button, Flex, IconButton, Link, Spacer } from "@chakra-ui/react";
import { IconHome, IconLogout } from "@tabler/icons-react";
import { useProfile } from "../hooks/useProfile";
export const Header: React.FC = () => {
  function deleteTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
  const { user } = useProfile();

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
          <Link href="/">
            <IconButton
              icon={<IconLogout />}
              aria-label={"Log out"}
              bg={"red.600"}
              _hover={{ bg: "red.500" }}
              _active={{ bg: "red.400" }}
              onClick={deleteTokens}
            ></IconButton>
          </Link>
        )}
      </Flex>
    </Box>
  );
};
