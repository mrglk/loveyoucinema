import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header container">
      <div className="header__inner container__row">
        <h2 className="header__header">
        <Link to="/" className="header__name">
        LoveYouCinema{" "}
        </Link>
          <span className="header__description">— угадай фильм по кадру!</span>
        </h2>
        <div className="header__languages">
          <div className="header__language header__language_select">RU</div>
          <div className="header__language">EN</div>
          <Link to="/finish">
          Финиш
        </Link>
        </div>
      </div>
    </header>
  );
}
