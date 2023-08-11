import { NotLoggedHeader } from "../components/headers/not-logged-header";
import { HomeBody } from "../components/bodies/home-body";

export function Home() {
  return (
    <>
      <NotLoggedHeader />
      <HomeBody />
    </>
  );
}
