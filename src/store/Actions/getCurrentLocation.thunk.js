import currentLocationName from "../../services/currentLocationName";

const getCurrentLocation = async (lat, lon) => {
  try {
    const response = await currentLocationName.get("", {
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
