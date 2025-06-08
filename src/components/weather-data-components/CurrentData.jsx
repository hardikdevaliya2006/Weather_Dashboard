import { FiMapPin } from "react-icons/fi";
import WeatherIcon from "./WeatherIcon";

const CurrentData = ({ locationRawData }) => {
  return (
    <div className="currentDataCard flex flex-col h-fit gap-2 items-start justify-center p-3 sm:p-5 rounded-2xl text-font-light-primary dark:text-font-dark-primary bg-base-light-secondary dark:bg-base-dark-secondary">
      <div className="locationName w-fit px-3 text-sm sm:text-[1.1rem] flex items-center justify-start gap-2 rounded-md p-1 bg-base-light-tertiary dark:bg-base-dark-accent">
        <span>
          <FiMapPin />
        </span>
        <span>
          {locationRawData.name}, {locationRawData.sys.country}
        </span>
      </div>
      <div className="todayDate w-full">
        <div className="day text-2xl sm:text-3xl font-semibold">
          {new Date().toLocaleDateString("en-US", { weekday: "long" })}
        </div>
        <div className="date flex text-[1rem] sm:text-xl opacity-70 items-center justify-start gap-1">
          <span>
            {new Date().getDate() > 9
              ? new Date().getDate()
              : "0" + new Date().getDate()}
          </span>
          <span>
            {new Date().toLocaleDateString("en-US", { month: "long" })}
          </span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
      <div className="weatherInfo w-full flex items-center justify-center">
        <figure className="icon w-[60%]">
          <WeatherIcon weatherMain={locationRawData.weather[0].main} />
        </figure>
        <div className="weatherStatus flex items-end justify-center gap-3 flex-col w-[40%]">
          <div className="tempreture flex flex-col">
            <span className="dark:text-font-dark-primary text-font-light-primary text-2xl sm:text-3xl font-semibold">
              <span>
                {Math.round(locationRawData.main?.feels_like - 273.15)}
              </span>
              <span>°C</span>
            </span>
            <span className="flex sm:text-xl dark:text-font-dark-secondary text-font-light-secondary items-center justify-end">
              <span>
                /{Math.round(locationRawData.main?.temp_min - 273.15)}
              </span>
              <span>°C</span>
            </span>
          </div>
          <div className="weatherCondition flex flex-col items-end justify-center">
            <span className="description text-right capitalize text-xl sm:text-2xl">
              {locationRawData.weather[0].description}
            </span>
            <span className="feelsLike opacity-80 sm:text-[1.1rem]">
              Feels like {Math.round(locationRawData.main.temp_min - 273.15)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentData;
