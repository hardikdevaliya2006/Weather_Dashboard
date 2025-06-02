import Home from "./Pages/Home";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <AppRouter>
      <Home></Home>
    </AppRouter>
  );
};

export default App;
