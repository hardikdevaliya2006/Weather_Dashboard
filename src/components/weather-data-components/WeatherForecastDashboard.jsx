import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import getCurrentLocation from "../../store/Actions/getCurrentLocation.thunk";
import { fetchWeatherByLocation } from "../../store/Actions/search.thunk";
import Loading from "../loading/Loading";
import MainDashboard from "./MainDashboard";
import NotFound from "../../Pages/NotFound";

const WeatherForecastDashboard = () => {
  const { locationRawData, loading } = useSelector((state) => state.search);
  const { location } = useParams();
  const routerLocation = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWeatherFetch = async () => {
      if (routerLocation.pathname === "/") {
        if (!navigator.geolocation) {
          alert("Geolocation not supported");
          return;
        }
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const locationName = await getCurrentLocation(latitude, longitude);
            if (locationName) {
              dispatch(fetchWeatherByLocation(locationName))
            } else {
              alert("City Not Found");
            }
          },
          (err) => {
            console.error("Geolocation error:", err);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        dispatch(fetchWeatherByLocation(location));
      }
    };
    handleWeatherFetch();
  }, [dispatch, location, routerLocation.pathname])  

  return (
    <div>
      {loading || !locationRawData || !locationRawData.name || !locationRawData.weather ? (
        <Loading />
      ) : locationRawData == "404" ? (
        <NotFound />
      ) : (
        <MainDashboard />
      )}
    </div>
  );
};

export default WeatherForecastDashboard;
