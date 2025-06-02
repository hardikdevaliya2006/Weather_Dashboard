import WeatherForecastDashboard from "../components/weather-data-components/WeatherForecastDashboard";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <main>
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
