import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const WeatherForecastDashboard = () => {
  const { location } = useParams();
  const { locationRawData } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [latitude, setlatitude] = useState("")
  const [longitude, setlongitude] = useState("")

  useEffect(() => {
    if (!location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setlatitude(latitude)
          setlongitude(longitude)
        },
        (error) => {
          console.error("Geolocation error:", error);
          setGeoError(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    }
  }, [location, dispatch]);

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <div>{latitude+"    "+longitude}</div>
      <div className="location text-xl font-semibold">{location}</div>
      <div className="data">{JSON.stringify(locationRawData)}</div>
    </div>
  );
};

export default WeatherForecastDashboard;
