import { useSelector } from "react-redux";
import { useParams } from "react-router";

const WeatherForecastDashboard = () => {
  const { location } = useParams();
  const { locationRawData } = useSelector((state) => state.search);
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <div className="location text-xl font-semibold">{location}</div>

      <div className="data">{JSON.stringify(locationRawData)}</div>
    </div>
  );
};

export default WeatherForecastDashboard;
