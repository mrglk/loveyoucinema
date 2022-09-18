// import { useEffect, useRef } from "react";
import "./FinishPage.scss";
import Telegram from "../../assets/images/telegram.svg";
import VK from "../../assets/images/vk.svg";
import Whatsapp from "../../assets/images/whatsapp.svg";
import Facebook from "../../assets/images/facebook.svg";
import OK from "../../assets/images/ok.svg";
import Twitter from "../../assets/images/twitter.svg";
import { Link } from "react-router-dom";

export default function FinishPage() {
  let message = "Я отгадал 10 фильмов подряд на loveyoucinema.com";

  return (
    <div className="finishPage container__row_wide">
      <h1 className="finishPage__header">Поздравляем, вы победили!</h1>
      <p className="finishPage__description">
        Поделитесь результатом с друзьями
      </p>
      <div className="finishPage__share">
        <a
          href={`http://www.facebook.com/sharer.php?u=loveyoucinema.com&t=Я отгадал 10 фильмов подряд`}
          target="_blank"
          rel="noreferrer">
          <img alt="Facebook" src={Facebook} className="finishPage__icon"/>
          {/* <svg className="finishPage__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          width="50px"
          height="50px"
          fill="#0e83cd"
          data-name="Ebene 1"
          /> */}
        </a>
        <a
          href={`http://vk.com/share.php?url=loveyoucinema.com&title="Название"&description="fegrhtj"`}
          target="_blank"
          rel="noreferrer">
          <img alt="VKontakte" src={VK} />
        </a>
        <a
          href={`https://connect.ok.ru/offer?url=loveyoucinema.com&title=${message}`}
          target="_blank"
          rel="noreferrer">
          <img alt="OK" src={OK} />
        </a>
        <a
          href="https://t.me/share/url?url=loveyoucinema.com&text=Я отгадал 10 фильмов подряд"
          target="_blank"
          rel="noreferrer">
          <img alt="Telegram" src={Telegram} />
        </a>
        <a
          href={`whatsapp://send?text=${message}`}
          target="_blank"
          rel="noreferrer">
          <img alt="Whatsapp" src={Whatsapp} />
        </a>
        <a
          href={`http://twitter.com/share?text=${message}`}
          target="_blank"
          rel="noreferrer">
          <img alt="Twitter" src={Twitter} />
        </a>
      </div>
      <div className="finishPage__continue">
      <Link to="/" className="finishPage__button">
          Продолжить игру
        </Link>
      </div>
    </div>
  );
}