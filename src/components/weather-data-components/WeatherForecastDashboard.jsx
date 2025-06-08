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
import { fetchForecastByCoords } from "../../store/Actions/getForecast.thunk";

const WeatherForecastDashboard = () => {
  const {
    locationRawData,
    loading: searchLoading,
    error,
  } = useSelector((state) => state.search);
  const { otherCountriesWeatherData, loading: countriesLoading } = useSelector(
    (state) => state.otherCountriesWeather
  );
  const { forecastData, loading: forecastDataLoading } = useSelector(
    (state) => state.forecast
  );
  const loading = searchLoading || countriesLoading || forecastDataLoading;
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
            dispatch(fetchForecastByCoords({ lon:longitude, lat:latitude }));            
            const locationName = await getCurrentLocation(latitude, longitude);
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



  return (
    <div>
      {loading ? (
        <Loading />
      ) : error === 404 ? (
        <NotFound />
      ) : !locationRawData?.name ? (
        <Loading />
      ) : (
        <MainDashboard
          otherCountriesWeatherData={otherCountriesWeatherData}
          locationRawData={locationRawData}
          forecastData={forecastData}
        />
      )}
    </div>
  );
};

export default WeatherForecastDashboard;
