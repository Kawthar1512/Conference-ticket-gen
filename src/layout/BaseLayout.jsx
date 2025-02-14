import Nav from "../components/NavBar";
import { Outlet } from "react-router";

export default function BaseLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
