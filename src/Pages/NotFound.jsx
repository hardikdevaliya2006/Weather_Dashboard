import { BiMessageSquareError } from "react-icons/bi";

const NotFound = () => {
  return (
    <section className="flex h-full items-center justify-center">
      <div className="errorMessage flex text-font-dark-primary dark:text-font-dark-primary items-center justify-center gap-2">
        <BiMessageSquareError className="text-xl" />
        <p>Result NotFound</p>
      </div>
    </section>
  );
};

export default NotFound;
