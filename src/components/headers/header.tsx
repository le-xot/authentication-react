import { Box, Button, Flex, IconButton, Link as ChakraLink, Spacer } from "@chakra-ui/react";
import { IconHome, IconLogout, IconUserShield } from "@tabler/icons-react";
import { UserContext } from "../hooks/userContext";
import { useContext } from "react";
import { useNavigate, Link as RouterLink } from 'react-router-dom'

export const Header: React.FC = () => {
  const userContext = useContext(UserContext);
  const user = userContext.user;

  const navigate = useNavigate()

  async function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    await userContext.refetch();
    navigate('/')
  }

  return (
    <Box bg={"#1A1B1E"} h={"80px"} p={5}>
      <Flex alignItems={"center"} h="100%">
        <ChakraLink as={RouterLink} to={'/'} >
          <Button leftIcon={<IconHome />}>
            Home
          </Button>
        </ChakraLink>

        <Spacer />

        {!user && (
          <>
          <Button onClick={() => navigate('/login')}>Log in</Button>
          <Button
            marginLeft={"20px"}
            bg={"blue.600"}
            _hover={{ bg: "blue.500" }}
            _active={{ bg: "blue.400" }}
            onClick={() => navigate('/register')}
          >
            Sign up
          </Button>
          </>
        )}

        {user && (
          <>
            <Button onClick={() => navigate('/admin')} leftIcon={<IconUserShield />}>
              Admin Panel
            </Button>
            <IconButton
              marginLeft={"20px"}
              icon={<IconLogout />}
              aria-label={"Log out"}
              bg={"red.600"}
              _hover={{ bg: "red.500" }}
              _active={{ bg: "red.400" }}
              onClick={logout}
            ></IconButton>
          </>
        )}
      </Flex>
    </Box>
  );
};
