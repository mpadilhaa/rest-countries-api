import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Countries from "./pages/Countries/Country";
import "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<Countries />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
