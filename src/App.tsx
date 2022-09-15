import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { MainPage } from "./components/MainPage/MainPage";
import FinishPage from "./components/FinishPage/FinishPage";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
          <div className="App">
      <Header />
      <main>
        {/* <MainPage /> */}
        {/* <FinishPage /> */}
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/finish" element={<FinishPage/>} />
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
