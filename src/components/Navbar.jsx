import { FaBars, FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { navLinks } from "../utils/NavLinks";

const Navbar = () => {
  const {
    toggleSidebar,
    isDarkMode,
    toggleDarkMode,
    noOfItemsInCart,
    user,
    logout,
  } = useGlobalContext();
  // console.log(noOfItemsInCart);
  // console.log(user?.displayName);

  return (
    <>
      <nav className="flex justify-between items-center py-3 relative text-2xl sm:text-lg text-white bg-slate-700 sm:py-2 ">
        <button
          className="block p-1 rounded-lg sm:hidden"
          onClick={toggleSidebar}
        >
          <FaBars className="" />
        </button>
        <p className="hidden sm:block text-4xl border p-1 ml-4">BoxSpace</p>
        <ul className="hidden sm:flex nav-links w-10/12  justify-center gap-4 mx-4 capitalize children:cursor-pointer ">
          {navLinks.map((link) => {
            const { id, url, text } = link;
            if ((url === "checkout" || url === "orders") && !user) return;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  end
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex utils w-max items-center gap-6 lg:gap-8 mr-4 ">
          <Link to="/cart" className="cursor-pointer flex relative ">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute left-6 bottom-4 text-lg bg-violet-500 w-max h-min px-1 text-center rounded-[40%]">
              {noOfItemsInCart}
            </span>
          </Link>
          <p
            className="darkmode cursor-pointer text-xl"
            onClick={toggleDarkMode}
          >
            {isDarkMode.dark ? <FaSun /> : <FaMoon />}
          </p>
          {user ? (
            <div>
              <p className="text-sm">welcome {user.displayName}</p>

              <button onClick={() => logout()}>Logout</button>
            </div>
          ) : (
            <>
              {" "}
              <Link to="login" className="">
                Login
              </Link>
              <Link to="signup" className="w-max ">
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
