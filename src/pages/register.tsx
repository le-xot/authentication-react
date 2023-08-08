import { NotLoggedHeader } from "../components/headers/notLoggedHeader";
import { RegisterBody } from "../components/bodies/registerBody";

export function Register() {
  return (
    <>
      <NotLoggedHeader />
      <RegisterBody />
    </>
  );
}
