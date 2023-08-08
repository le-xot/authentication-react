import { NotLoggedHeader } from "../components/headers/notLoggedHeader";
import { LoginBody } from "../components/bodies/loginBody";

export function Login() {
  return (
    <>
      <NotLoggedHeader />
      <LoginBody />
    </>
  );
}
