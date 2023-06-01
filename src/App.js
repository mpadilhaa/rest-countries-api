import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Countries from "./pages/Countries/Country";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  console.log(isDarkMode);

  return (
    <div
      className={`${styles.main} ${isDarkMode ? styles.dark : styles.light}`}
    >
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
