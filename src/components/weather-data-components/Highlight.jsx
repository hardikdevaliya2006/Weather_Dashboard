import { PiWind } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";
import sunrise from "../../../public/svg/sunrise.svg";
import sunset from "../../../public/svg/sunset.svg";
import "../../App.css";

const Highlight = ({ locationRawData }) => {
  
  return (
    <div className="p-3 w-full sm:p-5 rounded-2xl text-font-light-primary dark:text-font-dark-primary bg-base-light-secondary dark:bg-base-dark-secondary flex flex-col gap-2 items-start justify-center">
      <div className="title font-semibold text-xl sm:text-3xl">
        <h1>Today’s Highlight</h1>
      </div>
      <div className="highLightWraper w-full flex items-center gap-4 flex-col sm:flex-row md:flex-col lg:flex-row justify-center">
        <div className="basicInfo w-full flex gap-4">
          <div className="firstrow w-full flex flex-col gap-4">
            <div className="py-2 w-full px-4 bg-base-light-tertiary dark:bg-base-dark-quaternary rounded-xl flex flex-col items-center justify-center gap-1">
              <span className="text-[1.1rem] md:text-xl flex items-center font-semibold justify-center gap-1">
                <PiWind />
                <h3>Wind</h3>
              </span>
              <span className="units pt-2 flex w-full items-end gap-1 justify-end">
                <span className="text-xl font-semibold">
                  {locationRawData.wind.speed}
                </span>
                <span className="text-[1.1rem] dark:text-font-light-muted">
                  km/h
                </span>
              </span>
              <span className="description w-full flex items-center justify-end">
                <p>
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </span>
            </div>
            <div className="py-2 px-4 bg-base-light-tertiary dark:bg-base-dark-quaternary rounded-xl flex flex-col items-center justify-center gap-1">
              <span className="text-[1.1rem] md:text-xl flex items-center font-semibold justify-center gap-1">
                <MdOutlineWaterDrop />
                <h3>Humidity</h3>
              </span>
              <span className="units pt-2 flex w-full items-end gap-1 justify-end">
                <span className="text-xl font-semibold">
                  {locationRawData.main.humidity}
                </span>
                <span className="text-[1.1rem] dark:text-font-light-muted">
                  %
                </span>
              </span>
              <span className="description w-full flex items-center justify-end">
                <p>
                  {locationRawData.main.humidity < 30
                    ? "Dry"
                    : locationRawData.main.humidity <= 50
                    ? "Good"
                    : locationRawData.main.humidity <= 60
                    ? "Moderate"
                    : "Poor"}
                </p>
              </span>
            </div>
          </div>
          <div className="second w-full flex flex-col gap-4">
            <div className="py-2 px-4 bg-base-light-tertiary dark:bg-base-dark-quaternary rounded-xl flex flex-col items-center justify-center gap-1">
              <span className="text-[1.1rem] md:text-xl flex items-center font-semibold justify-center gap-1">
                <IoMdSpeedometer />
                <h3>Pressure</h3>
              </span>
              <span className="units pt-2 flex w-full items-end gap-1 justify-end">
                <span className="text-xl font-semibold">
                  {locationRawData.main.pressure}
                </span>
                <span className="text-[1.1rem] dark:text-font-light-muted">
                  hPa
                </span>
              </span>
              <span className="description w-full flex items-center justify-end">
                <p>Normal</p>
              </span>
            </div>
            <div className="py-2 px-4 bg-base-light-tertiary dark:bg-base-dark-quaternary rounded-xl flex flex-col items-center justify-center gap-1">
              <span className="text-[1.1rem] md:text-xl flex items-center font-semibold justify-center gap-1">
                <LuEye />
                <h3>Visibility</h3>
              </span>
              <span className="units pt-2 flex w-full items-end gap-1 justify-end">
                <span className="text-xl font-semibold">
                  {(locationRawData.visibility / 1000).toFixed(0)}
                </span>
                <span className="text-[1.1rem] dark:text-font-light-muted">
                  km
                </span>
              </span>
              <span className="description w-full flex items-center justify-end">
                <p>
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="sunInfo w-full gap-4 grid grid-rows-2">
          <div className="sunrise flex items-center justify-between py-[1.11rem] lg:py-[1.28rem] px-[10%] bg-base-light-tertiary rounded-xl w-full dark:bg-base-dark-quaternary">
            <div className="icon">
              <img src={sunrise} alt="sunrise" className="h-18 w-18" />
            </div>
            <div className="time flex flex-col items-center">
              <p className="suntext">Sunrise</p>
              <p className="text-xl font-semibold">
                {new Date(
                  locationRawData.sys.sunrise * 1000
                ).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>
          </div>
          <div className="sunset flex items-center justify-between py-[1.11rem] lg:py-[1.28rem] px-[10%] bg-base-light-tertiary rounded-xl w-full dark:bg-base-dark-quaternary">
            <div className="icon">
              <img src={sunset} alt="sunset" className="h-18 w-18" />
            </div>
            <div className="time flex flex-col items-center">
              <p className="suntext">Sunset</p>
              <p className="text-xl font-semibold">
                {new Date(locationRawData.sys.sunset * 1000).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  }
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
