import CurrentData from "./CurrentData";
import Forecast from "./Forecast";
import Highlight from "./Highlight";
import OthersCountries from "./OthersCountries";

const MainDashboard = () => {
  return (
    <div className="mainDataWraper p-2 h-full">
      <div className="currentDataAndothersCountries md:w-[40%]">
        <CurrentData />
        <OthersCountries />
      </div>
      <div className="highlightAndForecast">
        <Highlight />
        <Forecast />
      </div>
    </div>
  );
};

export default MainDashboard;
