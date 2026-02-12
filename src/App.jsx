import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Reservations } from "./Reservations";
import { Login } from "./Login";

function App() {
  return (
    <div style={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
  },
};