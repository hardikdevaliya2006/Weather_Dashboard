import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <AppRouter>
      <Home/>
    </AppRouter>
  );
};

export default App;
