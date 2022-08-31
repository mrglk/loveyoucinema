import "./Header.scss";
// import RussianIcon from "../../assets/images/russian.svg";
// import EnglishIcon from "../../assets/images/english.svg";

export default function Header() {
  return (
    <header className="header container">
      <div className="header__inner container__row">
        <h2 className="header__header">
          LoveYouCinema{" "}
          <span className="header__description">— угадай фильм по кадру!</span>
        </h2>
        <div className="header__languages">
          <div className="header__language header__language_select">RU</div>
          <div className="header__language">EN</div>
        </div>
        {/* <div className="header__languages">
          <div className="header__flag">
            <img className="header__img" alt="Russian" src={RussianIcon} />
          </div>
          <div className="header__flag">
            <img className="header__img" alt="English" src={EnglishIcon} />
          </div>
        </div> */}
      </div>
    </header>
  );
}
