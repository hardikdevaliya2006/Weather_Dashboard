import CurrentData from "./CurrentData";
import Forecast from "./Forecast";
import Highlight from "./Highlight";
import OthersCountries from "./OthersCountries";

const MainDashboard = ({ otherCountriesWeatherData, locationRawData, forecastData }) => {  
  return (
    <div className="mainDataWraper px-2 pt-2 pb-1 h-full flex md:flex-row gap-[1rem] flex-col">
      <div className="currentDataAndothersCountries flex-col flex w-full md:w-[42%] gap-4">
        <CurrentData locationRawData={locationRawData}/>
        <OthersCountries otherCountriesWeatherData={otherCountriesWeatherData} />
      </div>
      <div className="highlightAndForecast w-full md:w-[58%] flex-col flex gap-4">
        <Highlight locationRawData={locationRawData} />
        <Forecast forecastData={forecastData} />
      </div>
    </div>
  );
};

export default MainDashboard;
