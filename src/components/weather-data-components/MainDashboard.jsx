import CurrentData from "./CurrentData";
import Forecast from "./Forecast";
import Highlight from "./Highlight";
import OthersCountries from "./OthersCountries";

const MainDashboard = ({ otherCountriesWeatherData, locationRawData }) => {  
  return (
    <div className="mainDataWraper p-2 h-full flex md:flex-row gap-[1rem] flex-col">
      <div className="currentDataAndothersCountries flex-col flex w-full md:w-[40%] gap-4">
        <CurrentData locationRawData={locationRawData}/>
        <OthersCountries otherCountriesWeatherData={otherCountriesWeatherData} />
      </div>
      <div className="highlightAndForecast w-full md:w-[60%]">
        <Highlight locationRawData={locationRawData} />
        <Forecast />
      </div>
    </div>
  );
};

export default MainDashboard;
