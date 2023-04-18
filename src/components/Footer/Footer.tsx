import "./Footer.scss";
import ReactSwitch from "react-switch";
import { getPageLang } from "../../helpers/helpers";

type FooterProps = {
  handleClick: () => void;
  theme: string;
};


export default function Footer({handleClick, theme}: FooterProps) {
  const lang = getPageLang();

  return (
    <footer className="footer container">
      <div className="footer__inner container__row">
        <div className="footer__description">LoveYouCinema.com © 2022</div>
        <div className="footer__switch">
        <label className="footer__label">{theme === 'light' ? lang === 'ru' ? "Светлая тема" : 'Light mode' : lang === 'ru' ? 'Темная тема' : 'Dark mode'}</label>
        <ReactSwitch onChange={handleClick} checked={theme === 'dark'}
        onColor="#4f9dcd"
        onHandleColor="#0a68a2"
        handleDiameter={27}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={15}
        width={42}
        className="react-switch"
        id="material-switch"/>
        </div>
      </div>
    </footer>
  );
}
