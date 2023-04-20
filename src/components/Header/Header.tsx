import "./Header.scss";
import { Link } from "react-router-dom";
import { getPageLang } from "../../helpers/helpers";

type HeaderProps = {
  toggleLang: (lang: string) => void;
};

export default function Header({ toggleLang}: HeaderProps) {
  const lang = getPageLang();

  return (
    <header className="header container">
      <div className="header__inner container__row">
        <h2 className="header__header">
        <Link to="/" className="header__name">
        LoveYouCinema{" "}
        </Link>
          <span className="header__description">— {lang === 'ru' ? 'угадай фильм по кадру!' : 'guess the movie by the frame'}</span>
        </h2>
        <div className="header__languages">
          <button onClick={() => toggleLang('ru')} className={lang === 'ru' ? "header__language header__language_select" : "header__language"}>RU</button>
          <button onClick={() => toggleLang('en')} className={lang === 'en' ? "header__language header__language_select" : "header__language"}>EN</button>
          {/* <Link to="/finish">
          Финиш
        </Link> */}
        </div>
      </div>
    </header>
  );
}
