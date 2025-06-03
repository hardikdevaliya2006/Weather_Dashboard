import { IoCloseSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className="flex py-2 md:py-3.5 w-full rounded-full bg-base-light-tertiary dark:bg-base-dark-tertiary items-center justify-start">
      <div className="serchIcon mx-3 md:mx-5">
        <BsSearch className="text-xl md:text-2xl text-font-light-muted dark:text-font-dark-muted" />
      </div>
      <form>
        <input
          type="text"
          autoComplete="off"
          spellCheck="false"
          placeholder="Search Your Location"
          className="bg-transparent outline-0 border-0 w-fit text-[1.1rem] md:text-xl text-font-light-primary dark:text-font-dark-primary placeholder:text-font-light-muted dark:placeholder:text-font-dark-muted"
        />
      </form>
      <div className="closeIcon h-full mr-5">
        {
          <IoCloseSharp className="cursor-pointer text-xl md:text-2xl text-font-light-primary dark:text-font-dark-primary" />
        }
      </div>
    </div>
  );
};

export default SearchBox;
