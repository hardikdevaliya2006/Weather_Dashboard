import { AnimatePresence, motion } from "motion/react";
import { getDayLabel } from "../../helper/getLableDate";
import WeatherIcon from "./WeatherIcon";

const Forecast = ({ forecastData }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
        layout
        className="p-3 w-full sm:p-5 rounded-2xl text-font-light-primary dark:text-font-dark-primary bg-base-light-secondary dark:bg-base-dark-secondary flex flex-col gap-2 items-start justify-center"
      >
        <div className="title font-semibold py-2 text-xl sm:text-3xl">
          <h1>Forecast</h1>
        </div>
        <div className="Forecast snap-x snap-mandatory scrollBar scrollBarVisible overflow-x-auto w-full">
          <ul className="w-full lg:mb-4 flex items-center justify-start gap-4">
            {forecastData.list.map((day, index) => (
              <li
                key={index}
                className="min-w-36.5 lg:min-w-43 snap-start p-2 flex flex-col gap-2 items-center justify-center rounded-2xl bg-base-light-tertiary dark:bg-base-dark-quaternary"
              >
                <div className="dayName flex flex-col items-center justify-center">
                  <p className="lg:text-2xl lg:pt-1.5 lg:font-semibold">
                    {getDayLabel(day.dt).time}
                  </p>
                  <p className="md:hidden lg:text-xl lg:flex text-font-light-muted dark:text-shadow-font-dark-secondary">
                    {getDayLabel(day.dt).label}
                  </p>
                </div>
                <div
                  className="h-0.5 w-4/5 dark:hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #cccccc 0%, #7E7E7E 50%, #cccccc 100%)",
                  }}
                ></div>

                <div
                  className="h-0.5 w-4/5 hidden dark:block"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #363636 0%, #7E7E7E 50%, #363636 100%)",
                  }}
                ></div>

                <div className="wetherIcon md:hidden lg:flex pt-2">
                  <WeatherIcon
                    weatherMain={day.weather[0].main}
                    classBlob={"h-18 w-18 lg:w-[8.5rem] lg:h-[8.5rem]"}
                  />
                </div>
                <div className="tempreture p-0 lg:py-2 lg:text-2xl font-semibold">
                  {day.main.feels_like.toFixed(0)}°C
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Forecast;
