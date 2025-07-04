import WeatherForecastDashboard from "../components/weather-data-components/WeatherForecastDashboard";
import UseFullLink from "../components/Footer/UseFullLinks"
import Navbar from "../components/Toggle-Bar/Navbar";
import "../App.css";

const Home = () => {
  return (
    <main className="mainContantWrap bg-base-light-primary dark:bg-base-dark-primary w-full">
      <header>
        <Navbar />
      </header>
      <section>
        <WeatherForecastDashboard />
      </section>
      <footer>
        <UseFullLink />
      </footer>
    </main>
  );
};

export default Home;
