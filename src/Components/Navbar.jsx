import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sm:w-full sm:h-[80px] sm:flex sm:justify-between sm:items-center ">
      <h1 className="text-[36px] ">Akaikumogo</h1>
      <div className="font-semibold sm:h-full sm:w-[50%]  sm:flex sm:items-center sm:justify-end sm:gap-5 sm:px-2  ">
        <NavLink
          className={
            "w-[100px] py-[10px] text-center duration-700 ease-in-out rounded-[10px] hover:bg-white hover:text-black transition-all"
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={
            "w-[100px] py-[10px] text-center duration-700 ease-in-out rounded-[10px] hover:bg-white hover:text-black transition-all"
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={
            "w-[100px] py-[10px] text-center duration-700 ease-in-out rounded-[10px] hover:bg-white hover:text-black transition-all"
          }
          to="/Portfolio"
        >
          Portfolio
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
