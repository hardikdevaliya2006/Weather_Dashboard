import { useParams } from "react-router"

const WeatherForecastDashboard = () => {
  const { location } = useParams()
  return (
    <div>{location}</div>
  )
}

export default WeatherForecastDashboard