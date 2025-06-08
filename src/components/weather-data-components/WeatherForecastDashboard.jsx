import getCurrentLocation from "../../store/Actions/getCurrentLocation.thunk";
import Loading from "../loading/Loading";
import MainDashboard from "./MainDashboard";
import NotFound from "../../Pages/NotFound";
import { popularCountries } from "../../helper/helperScript";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { fetchWeatherByLocation } from "../../store/Actions/search.thunk";
import { fetchWeatherByCountry } from "../../store/Actions/otherCountriesWeather.thunk";

const WeatherForecastDashboard = () => {
  const {
    locationRawData,
    loading: searchLoading,
    error,
  } = useSelector((state) => state.search);
  const { otherCountriesWeatherData, loading: countriesLoading } = useSelector(
    (state) => state.otherCountriesWeather
  );
  const loading = searchLoading || countriesLoading;
  const { location } = useParams();
  const routerLocation = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWeatherFetch = async () => {
      popularCountries.forEach((country) => {
        dispatch(fetchWeatherByCountry(country));
      });
      if (routerLocation.pathname === "/") {
        if (!navigator.geolocation) {
          alert("Geolocation not supported");
          return;
        }
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const locationName = await getCurrentLocation(latitude, longitude);
            console.log(locationName);

            if (locationName) {
              dispatch(fetchWeatherByLocation(locationName));
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
  }, [dispatch, location, routerLocation.pathname]);

  console.log(otherCountriesWeatherData);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error === 404 ? (
        <NotFound />
      ) : !locationRawData?.name ? (
        <Loading />
      ) : (
        <MainDashboard locationRawData={locationRawData} />
      )}
    </div>
  );
};

export default WeatherForecastDashboard;
