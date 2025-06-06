import { BiMessageSquareError } from "react-icons/bi";

const NotFound = () => {
  return (
    <section className="flex h-full items-center justify-center">
      <div className="errorMessage flex items-center justify-center gap-2">
        <BiMessageSquareError className="text-xl" />
        <p>Result NotFound</p>
      </div>
    </section>
  );
};

export default NotFound;
