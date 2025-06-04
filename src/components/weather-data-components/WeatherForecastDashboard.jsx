import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import getCurrentLocation from "../../store/Actions/getCurrentLocation.thunk";
import { fetchWeatherByLocation } from "../../store/Actions/search.thunk";

const WeatherForecastDashboard = () => {
  const { locationRawData } = useSelector((state) => state.search);
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
              console.log(locationName);

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
    <div className="flex dark:text-white text-base-dark-primary items-center justify-center flex-col gap-5">
      <div className="location text-xl font-semibold">{location}</div>
      <div className="data">{JSON.stringify(locationRawData)}</div>
    </div>
  );
};

export default WeatherForecastDashboard;
