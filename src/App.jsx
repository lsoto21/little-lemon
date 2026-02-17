import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { BookingPage } from "./BookingPage";
import { Login } from "./Login";
import { ConfirmedBooking } from "./ConfirmedBooking";

function App() {
  return (
    <div style={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
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