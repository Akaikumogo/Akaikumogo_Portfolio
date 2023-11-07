import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[50px]  sm:h-[80px] flex justify-between items-center ">
      <Link to="/" className="sm:text-[36px]  text-[22px] ">
        Akaikumogo
      </Link>
      <div className="font-semibold px-3  h-[80%] w-[70%] sm:h-full sm:w-[50%]  flex items-center justify-between sm:justify-end gap-1 sm:px-2  ">
        <NavLink
          className={
            "text-[16px] py-[2px] px-[8px]  sm:w-[100px] rounded-md sm:py-[10px] text-center duration-700 ease-in-out sm:rounded-[10px] hover:bg-white hover:text-black transition-all"
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={
            "text-[16px] py-[2px] px-[8px]  sm:w-[100px] rounded-md sm:py-[10px] text-center duration-700 ease-in-out sm:rounded-[10px] hover:bg-white hover:text-black transition-all"
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={
            "text-[16px] py-[2px] px-[8px]  sm:w-[100px] rounded-md sm:py-[10px] text-center duration-700 ease-in-out sm:rounded-[10px] hover:bg-white hover:text-black transition-all"
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
