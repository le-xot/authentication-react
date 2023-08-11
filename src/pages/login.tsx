import { NotLoggedHeader } from "../components/headers/not-logged-header";
import { LoginBody } from "../components/bodies/login-body";

export function Login() {
  return (
    <>
      <NotLoggedHeader />
      <LoginBody />
    </>
  );
}
