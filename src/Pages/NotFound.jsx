import { BiMessageSquareError } from "react-icons/bi";

const NotFound = () => {
  return (
    <section className="flex h-full items-center justify-center">
      <div className="errorMessage flex text-font-light-muted-primary dark:text-font-dark-primary items-center justify-center gap-1">
        <BiMessageSquareError className="text-xl" />
        <p>Search Result NotFound</p>
      </div>
    </section>
  );
};

export default NotFound;
