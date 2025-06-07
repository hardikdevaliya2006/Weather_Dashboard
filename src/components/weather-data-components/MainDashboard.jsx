import CurrentData from "./CurrentData";
import Forecast from "./Forecast";
import Highlight from "./Highlight";
import OthersCountries from "./OthersCountries";

const MainDashboard = ({ locationRawData }) => {
  return (
    <div className="mainDataWraper h-full">
      <div className="currentDataAndothersCountries">
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
