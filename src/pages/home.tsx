import { NotLoggedHeader } from "../components/headers/notLoggedHeader";
import { HomeBody } from "../components/bodies/homeBody";

export function Home() {
  return (
    <>
      <NotLoggedHeader />
      <HomeBody />
    </>
  );
}
