import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { MainPage } from "./pages/MainPage/MainPage";
import FinishPage from "./pages/FinishPage/FinishPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { getPageLang } from "./helpers/helpers";
const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const App = () => {
  const currentTheme = localStorage.getItem("theme") || "light";
  const currentLang = getPageLang();
  const [theme, setTheme] = useState<string>(currentTheme);
  const [pageLang, setPageLang] = useState<string>(currentLang);

  useEffect(() => {
    document.cookie = `lang=${currentLang}`;
  }, [currentLang]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleLang = (lang: string) => {
    if (lang !== currentLang) {
      document.cookie = `lang=${lang}`;
      setPageLang(lang);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="App" id={theme}>
          <Header toggleLang={toggleLang} />
          <main>
            <Routes>
              <Route path="/" element={<MainPage lang={pageLang} />} />
              <Route path="/finish" element={<FinishPage />} />
            </Routes>
          </main>
          <Footer handleClick={toggleTheme} theme={theme} />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
