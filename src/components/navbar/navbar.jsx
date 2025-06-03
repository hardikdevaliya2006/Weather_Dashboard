import Mode from "./Mode";
import Title from "./Title";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <nav className="navbarWrap p-2 w-full flex md:items-center items-start gap-2 justify-center md:justify-between md:flex-row flex-col">
      <div className="time w-fit flex justify-center items-center ">
        <Title />
      </div>
      <div className="searchAndmode flex w-full md:w-fit items-center justify-center gap-4">
        <SearchBox />
        <Mode />
      </div>
    </nav>
  );
};

export default Navbar;
