import { NotLoggedHeader } from "../components/headers/not-logged-header";
import { RegisterBody } from "../components/bodies/register-body";

export function Register() {
  return (
    <>
      <NotLoggedHeader />
      <RegisterBody />
    </>
  );
}
