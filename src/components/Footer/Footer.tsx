import "./Footer.scss";
import ReactSwitch from "react-switch";

type FooterProps = {
  handleClick: () => void;
  theme: string;
};


export default function Footer({handleClick, theme}: FooterProps) {
  return (
    <footer className="footer container">
      <div className="footer__inner container__row">
        <div className="footer__description">LoveYouCinema.com © 2022</div>
        <div className="footer__switch">
        <label className="footer__label">{theme === 'light' ? 'Light mode' : 'Dark mode'}</label>
        <ReactSwitch onChange={handleClick} checked={theme === 'dark'}/>
        </div>
      </div>
    </footer>
  );
}
