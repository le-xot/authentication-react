import { LoggedHeader } from "../components/headers/logged-header";
import { AdminBody } from "../components/bodies/admin-body";

export function Admin() {
  return (
    <>
      <LoggedHeader />
      <AdminBody />
    </>
  );
}
