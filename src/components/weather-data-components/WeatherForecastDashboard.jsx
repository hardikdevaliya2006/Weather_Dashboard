import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import getCurrentLocation from "../../store/Actions/getCurrentLocation.thunk";
import { fetchWeatherByLocation } from "../../store/Actions/search.thunk";
import sunny from "../../../public/svg/weatherIcon/sunny.svg"

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
      }
    };
    handleWeatherFetch();
  }, [dispatch, location, routerLocation.pathname]);

  return (
    <section className="flex bg-base-light-secondary dark:bg-base-dark-secondary dark:text-white text-base-dark-primary items-center justify-center flex-col gap-5">
      {loading ? (
        <p>Loading weather data...</p>
      ) : (
        <img src={sunny} alt="sunny" className="h-40 w-40" />
      )}
    </section>
  );
};

export default WeatherForecastDashboard;
