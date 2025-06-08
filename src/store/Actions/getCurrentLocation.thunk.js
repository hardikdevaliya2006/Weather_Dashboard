import weatherData from "../../services/weatherData";

const getCurrentLocation = async (lat, lon) => {
  try {
    const response = await weatherData.get("/geo/1.0/reverse", {
      params: {
        lat,
        lon,
        limit: 1,
      },
    });
    const location = response.data[0];
    return location.name || null;
  } catch (error) {
    console.error("Error getting city name from coords:", err);
    return null;
  }
};

export default getCurrentLocation;
