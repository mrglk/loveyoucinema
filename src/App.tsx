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
import { createContext, useState } from "react";
const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const App = () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState<string>(currentTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <Router>
    <div className="App" id={theme}>
                <Header />
                <main>
                  <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/finish" element={<FinishPage/>} />
                    </Routes>
                </main>
                <Footer handleClick={toggleTheme} theme={theme}/>
    </div>
    </Router>
    </ThemeContext.Provider>
  );
};

export default App;