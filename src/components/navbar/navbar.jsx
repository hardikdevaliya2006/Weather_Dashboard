import Mode from "./Mode";
import Title from "./Title";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <nav className="navbarWrap h-[10vh] px-4 w-full flex items-center justify-between">
      <div className="time w-fit flex justify-center items-center ">
        <Title />
      </div>
      <div className="searchAndmode flex w-fit items-center justify-center gap-4">
        <SearchBox />
        <Mode />
      </div>
    </nav>
  );
};

export default Navbar;
