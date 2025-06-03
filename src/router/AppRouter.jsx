import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import QureyPage from "../Pages/QureyPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:location" element={<QureyPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
