import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainWrapper = ({ children }) => {
  return (
    <>
      {/* header */}
      <Navbar />
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
};

export default MainWrapper;
