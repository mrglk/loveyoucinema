import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import MainPage from "./components/MainPage/MainPage";
import FinishPage from "./components/FinishPage/FinishPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <MainPage /> */}
        <FinishPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
