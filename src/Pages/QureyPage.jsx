import WeatherForecastDashboard from "../components/weather-data-components/WeatherForecastDashboard";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/footer/Footer";
import "../App.css";

const QureyPage = () => {
  return (
    <main className="mainContantWrap bg-base-light-primary dark:bg-base-dark-primary h-screen w-full">
      <header>
        {/* <Navbar /> */}
      </header>
      <section>
        <WeatherForecastDashboard />
      </section>
      <footer>
        {/* <Footer /> */}
      </footer>
    </main>
  );
};

export default QureyPage;
