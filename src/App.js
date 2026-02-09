import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Nav } from './Nav';

function App() {
  return (
    <div className="app" style={styles.app}>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;


const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "3vw",
    marginRight: "3vw",
  },
};