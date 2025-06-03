import { BsFillCupHotFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { MdNightsStay } from "react-icons/md";

const Title = () => {
  const currentHour = new Date().getHours();

  let greeting = "";
  let Icon = null;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
    Icon = FaSun;
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
    Icon = BsFillCupHotFill;
  } else {
    greeting = "Good Night";
    Icon = MdNightsStay;
  }

  return (
    <div className="flex items-start justify-center flex-col">
      <div className="icon flex items-center justify-start gap-1">
        <Icon className="text-2xl text-font-light-primary dark:text-font-dark-primary"/>
        <span className="text-2xl font-semibold flex font-light-secondary dark:text-font-dark-secondary">Hi,</span>
      </div>
      <div className="time font-semibold text-2xl text-font-light-primary dark:text-font-dark-primary">
        <p>{greeting}</p>
      </div>
    </div>
  );
};

export default Title;
