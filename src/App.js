import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
