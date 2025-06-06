import WeatherForecastDashboard from "../components/weather-data-components/WeatherForecastDashboard";
import Footer from "../components/Footer";
import "../App.css";
import Navbar from "../components/Toggle-Bar/Navbar";

const QureyPage = () => {
  return (
    <main className="mainContantWrap bg-base-light-primary dark:bg-base-dark-primary h-screen w-full">
      <header>
        <Navbar />
      </header>
      <section>
        <WeatherForecastDashboard />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default QureyPage;
