import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Admin } from "./pages/admin";
import { useProfile } from "./components/hooks/useProfile";
import { Header } from "./components/headers/header";
import { UserContext } from "./components/hooks/userContext";
import { useContext } from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";

const ProtectedRoutes = () => {
  const userContext = useContext(UserContext);

  if (userContext.isLoading) {
    return (
      <>
        <Box h={`calc(100vh - 80px)`} bg={"#141517"}>
          <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
            <Spinner size={"xl"} />
          </Flex>
        </Box>
      </>
    );
  }
  if (!userContext.user) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export const App = () => {
  const { user, isLoading } = useProfile();
  console.log(user, isLoading);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      <>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="admin" element={<Admin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </UserContext.Provider>
  );
};
