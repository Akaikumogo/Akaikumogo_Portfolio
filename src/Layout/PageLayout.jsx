import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Layout() {
  return (
    <div className="w-full h-screen bg-black font-mono text-white ">
      <header className="mx-auto sm:w-[85%]">
        <Navbar />
      </header>
      <main className="sm:w-[85%] sm:h-[85%]  mx-auto  mt-[10px]">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
