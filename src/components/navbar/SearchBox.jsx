import { IoCloseSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store/reducers/search.reducer";
import { useNavigate } from "react-router";
import { fetchWeatherByLocation } from "../../store/Actions/search.thunk";

const SearchBox = () => {
  const { query, locationRawData, loading } = useSelector(
    (state) => state.search
  )
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      dispatch(fetchWeatherByLocation(query))
      navigate(`/${query}`)
    }
  }

  const handleClear = () => {
    dispatch(setQuery(""))
    navigate("/")
  }
  
  return (
    <div className="flex py-2 md:py-3.5 w-full rounded-full bg-base-light-tertiary dark:bg-base-dark-tertiary items-center justify-start">
      <div className="serchIcon mx-3 md:mx-5">
        <BsSearch className="text-[1rem] md:text-2xl text-font-light-muted dark:text-font-dark-muted" />
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          autoComplete="off"
          onChange={(e) => dispatch(setQuery(e.target.value))}
          value={query}
          spellCheck="false"
          placeholder="Search Your Location"
          className="bg-transparent outline-0 border-0 w-full text-sm md:text-xl text-font-light-primary dark:text-font-dark-primary placeholder:text-font-light-muted dark:placeholder:text-font-dark-muted"
        />
      </form>
      <div
        onClick={() => handleClear()}
        className="closeIcon h-full md:mr-5 mr-3"
      >
        <IoCloseSharp
          className={`${
            query ? "opacity-100" : "opacity-0"
          } cursor-pointer text-xl md:text-2xl text-font-light-primary dark:text-font-dark-primary`}
        />
      </div>
    </div>
  );
};

export default SearchBox;
