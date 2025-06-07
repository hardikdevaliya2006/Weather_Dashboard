import WeatherForecastDashboard from "../components/weather-data-components/WeatherForecastDashboard";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import "../App.css";

const Home = () => {
  return (
    <main className="mainContantWrap bg-base-light-primary dark:bg-base-dark-primary sm:h-screen w-full">
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

export default Home;
