import WeatherForecastDashboard from "../components/weather-data-components/WeatherForecastDashboard";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "../App.css";

const Home = () => {
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

export default Home;
