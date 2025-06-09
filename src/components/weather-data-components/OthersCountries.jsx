import { AnimatePresence, motion } from "motion/react";
import { popularCountries } from "../../helper/helperScript";
import WeatherIcon from "./WeatherIcon";

const OthersCountries = ({ otherCountriesWeatherData }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
        layout
        className="p-3 w-full sm:p-5 rounded-2xl text-font-light-primary dark:text-font-dark-primary bg-base-light-secondary dark:bg-base-dark-secondary gap-2"
      >
        <div className="title font-semibold py-2 text-xl sm:text-3xl">
          <h1>Others Countries</h1>
        </div>
        <div className="otherCountriesweather w-full h-[34vh] md:h-[43vh] overflow-scroll noScrollBar">
          <ul className="grid grid-cols-1 items-center w-full justify-center gap-4">
            {popularCountries.map((country) => {
              return (
                <li
                  className="flex items-center w-full rounded-2xl p-2 px-5 justify-between bg-base-light-tertiary dark:bg-base-dark-quaternary"
                  key={country}
                >
                  <div className="countriesName w-[33%] lg:w-[33%] md:w-[44%]">
                    <h2 className="text-xl lg:text-2xl sm:text-2xl md:text-xl">
                      {otherCountriesWeatherData[country].name}
                    </h2>
                    <h3 className="dark:text-font-dark-secondary text-font-light-secondary">
                      {otherCountriesWeatherData[country].weather[0].main}
                    </h3>
                  </div>
                  <div className="weatherIcon w-[33%] lg:w-[33%] md:w-[28%] flex items-center justify-center">
                    <WeatherIcon
                      weatherMain={
                        otherCountriesWeatherData[country].weather[0].main
                      }
                      classBlob={"w-18 sm:w-22 h-18 sm:h-22"}
                    />
                  </div>
                  <div className="tempreture w-[33%] lg:w-[33%] md:w-[28%] flex items-center justify-end">
                    <span className="flex flex-col">
                      <span className="text-xl sm:text-2xl md:text-xl lg:text-2xl">
                        {Math.round(
                          otherCountriesWeatherData[country].main.feels_like -
                            273.15
                        )}
                        °
                      </span>
                      <span className="dark:text-font-dark-secondary text-font-light-secondary">
                        /
                        {Math.round(
                          otherCountriesWeatherData[country].main.temp - 273.15
                        )}
                        °
                      </span>
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OthersCountries;
