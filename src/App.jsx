import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainWrapper from "./layout/MainWrapper";

const App = () => {
  return (
    <Routes>
      <Route element={<MainWrapper />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
