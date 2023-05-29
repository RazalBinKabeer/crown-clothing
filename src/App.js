import Navbar from "./routes/Navbar/Navbar.components";
import Home from "./routes/home/Home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
