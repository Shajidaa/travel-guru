import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
